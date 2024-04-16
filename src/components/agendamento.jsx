import { useForm } from "react-hook-form";
import { api } from "../config_axios";
import { useState } from "react";
import DatePicker from "react-datepicker"; // Importando o DatePicker
import "react-datepicker/dist/react-datepicker.css"; // Importando os estilos padrão do DatePicker
import TimePicker from 'react-time-picker';

const Agendamento = () => {
    const { register, handleSubmit, reset } = useForm();
    const [aviso, setAviso] = useState("");
    const [selectedDate, setSelectedDate] = useState(null); // Estado para controlar a data selecionada
    const [selectedTime, setSelectedTime] = useState("00:00"); // Estado para controlar a hora selecionada

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
        <div className="container-fluid bg-dark text-light min-vh-100 d-flex align-items-center">
            <div className="container p-5 bg-light text-dark rounded">
                <h4 className="fst-italic mb-3">Agendamento</h4>
                <form onSubmit={handleSubmit(salvar)}>
                    <div className="input-group mb-3">
                        <input
                            className="form-control" type="search" placeholder="Serviços" aria-label="Serviços" />
                        <button className="btn btn-outline-success" type="submit"> Pesquisar </button>
                    </div>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Serviços</option>
                        <option value="1">Elétrica</option>
                        <option value="2">Jardinagem</option>
                        <option value="3">Pintura</option>
                    </select>
                    <br />
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Prestadores</option>
                        <option value="1">João</option>
                        <option value="2">Maria</option>
                        <option value="3">Pedro</option>
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
                    <h6>selecione um horário:</h6>
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
    );
};

export default Agendamento;
