import { useForm } from "react-hook-form";
import { api } from "../config_axios";
import { useState } from "react";
import { Helmet } from "react-helmet";

const Cadastrar_Usuario = () => {
  const { register, handleSubmit, reset } = useForm();
  const [aviso, setAviso] = useState("");

  const salvar = async (campos) => {
    try {
      const response = await api.post("/cliente", campos);
      setAviso(`Usuário cadastrado com sucesso!"`);
      reset();
    } catch (error) {
      setAviso("Erro ao cadastrar usuário!");
    }
  };

  return (
    <>
      <Helmet>
        <title>Cadastro de Usuário</title>
      </Helmet>
      <div className="container p-5 bg-light text-dark rounded" style={{ borderColor: "#4e9c9c", borderWidth: "20px", borderStyle: "solid" }}> 
        <div className="container p-5 bg-light text-dark rounded">
          <h4 className="fst-italic mb-3">Preencha os campos para se cadastrar</h4>
          <form onSubmit={handleSubmit(salvar)}>
            <div className="form-group">
              <label htmlFor="cliente_nome">Nome:</label>
              <input
                type="text"
                className="form-control"
                id="cliente_nome"
                required
                autoFocus
                {...register("cliente_nome")}
              />
            </div>
            <div className="form-group">
              <label htmlFor="cliente_cpf">CPF:</label>
              <input
                type="text"
                className="form-control"
                id="cliente_cpf"
                required
                autoFocus
                {...register("cliente_cpf")}
              />
            </div>
            <div className="form-group">
              <label htmlFor="telefone_numero">Telefone:</label>
              <input
                type="text"
                className="form-control"
                id="telefone_numero"
                required
                autoFocus
                {...register("telefone_numero")}
              />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="cliente_email">Email:</label>
              <input
                type="email"
                className="form-control"
                id="cliente_email"
                required
                {...register("cliente_email")}
              />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="cliente_dataNascimento">Data de Nascimento:</label>
              <input
                type="date"
                className="form-control"
                id="cliente_dataNascimento"
                required
                {...register("cliente_dataNascimento")}
              />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="cliente_senha">Senha:</label>
              <input
                type="password"
                className="form-control"
                id="cliente_senha"
                required
                {...register("cliente_senha")}
              />
            </div>

            <input
              type="submit"
              className="btn btn-primary mt-3"
              value="Cadastrar"
            />
            <input
              type="reset"
              className="btn btn-danger mt-3 ms-3"
              value="Cancelar"
            />
          </form>
          <div className="alert mt-3">{aviso}</div>
        </div>
      </div>
    </>
  );
};

export default Cadastrar_Usuario;
