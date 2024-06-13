import { useForm } from "react-hook-form";
import { api } from "../config_axios";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet";

const Agendamento = () => {
    const { register, handleSubmit, reset } = useForm();
    const [aviso, setAviso] = useState("");
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState("00:00");
    const [servicos, setServicos] = useState([]);

    useEffect(() => {
        const fetchServicos = async () => {
            try {
                const response = await api.get("/servicos");
                setServicos(response.data);
                console.log(response.data);
            } catch (error) {
                console.error("Erro ao buscar serviços", error);
            }
        };

        fetchServicos();
    }, []);

    const fetchPrestadoresByServico = async (servicoId) => {
        if (!servicoId) return; // Handle empty service ID

        try {
            const response = await api.get(`/prestadores?servico_id=${servicoId}`); // Dynamic URL with query param
            setPrestadores(response.data);
            console.log(response.data);
        } catch (error) {
            console.error("Erro ao buscar prestadores", error);
        }
    };

    useEffect(() => {
        fetchPrestadoresByServico(selectedServicoId); // Fetch prestadores on service change
    }, [selectedServicoId]); // Dependency array for service ID

    const salvar = async (campos) => {
        try {
            const response = await api.post("agendamento", campos);
            setAviso("Agendamento realizado com sucesso!");
            reset();
        } catch (error) {
            setAviso("Erro ao realizar agendamento!");
        }
    };

    return (
        <>
            <Helmet>
                <title>Agendamento</title>
            </Helmet>
            <div className="container p-5 bg-light text-dark rounded" style={{ borderColor: "#4e9c9c", borderWidth: "20px", borderStyle: "solid" }}>
                <div className="container p-5 bg-light text-dark rounded">
                    <h4 className="fst-italic mb-3">Agendamento</h4>
                    <form onSubmit={handleSubmit(salvar)}>
                        <div className="input-group mb-3">
                            <input
                                className="form-control" type="search" placeholder="Serviços" aria-label="Serviços" />
                            <button className="btn btn-outline-success" type="submit"> Pesquisar </button>
                        </div>
                        <select className="form-select" aria-label="Default select example" {...register("servico_id")} defaultValue="">
                            <option value="" disabled>Selecione um serviço</option>
                            {servicos.map(servico => (
                                <option key={servico.servico_id} value={servico.servico_id}>{servico.servico_nome}</option>
                            ))}
                        </select>
                        <br />
                        <select className="form-select" aria-label="Prestadores" {...register("prestador_id")} defaultValue="">
                            <option value="" disabled>Selecione um prestador</option>
                            {prestadores.map((prestador) => (
                                <option key={prestador.prestador_id} value={prestador.prestador_id}>{prestador.prestador_nome}</option>
                            ))}     

                                
                            {errors.prestador_id && <span className="text-danger">Selecione um prestador</span>}
                        </select>
                        <br />
                        <div>
                            <label>Escolha a data que você deseja agendar o Serviço:</label>
                            <br />
                            <DatePicker
                                selected={selectedDate}
                                onChange={(date) => setSelectedDate(date)}
                                dateFormat="dd/MM/yyyy"
                                className="form-control"
                            />
                        </div>
                        <br />
                        <h6>Selecione um horário:</h6>
                        <div className="input-group mb-3">
                            <input
                                type="time"
                                className="form-control"
                                value={selectedTime}
                                onChange={(e) => setSelectedTime(e.target.value)}
                            />
                        </div>
                        <br />
                        <button type="submit" className="btn btn-primary">Agendar</button>
                    </form>
                    <div className="alert mt-3">{aviso}</div>
                </div>
            </div>
        </>
    );
};

export default Agendamento;
