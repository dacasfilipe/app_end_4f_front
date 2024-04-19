import { useForm } from "react-hook-form";
import { api } from "../config_axios";
import { useState } from "react";
import { Helmet } from "react-helmet";

const Cadastrar_Usuario = () => {
  const { register, handleSubmit, reset } = useForm();
  const [aviso, setAviso] = useState("");

  const salvar = async (campos) => {
    try {
      const response = await api.post("usuarios", campos);
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
              <label htmlFor="username">Nome:</label>
              <input
                type="text"
                className="form-control"
                id="username"
                required
                autoFocus
                {...register("username")}
              />
            </div>
            <div className="form-group">
              <label htmlFor="cpf">CPF:</label>
              <input
                type="text"
                className="form-control"
                id="cpf"
                required
                autoFocus
                {...register("cpf")}
              />
            </div>
            <div className="form-group">
              <label htmlFor="telefone">Telefone:</label>
              <input
                type="text"
                className="form-control"
                id="telefone"
                required
                autoFocus
                {...register("telefone")}
              />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                required
                {...register("email")}
              />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="status">Senha:</label>
              <input
                type="password"
                className="form-control"
                id="senha"
                required
                {...register("senha")}
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
