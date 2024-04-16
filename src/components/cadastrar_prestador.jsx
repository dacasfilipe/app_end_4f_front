import { useForm } from "react-hook-form";
import { api } from "../config_axios";
import { useState } from "react";

const Cadastrar_prestador = () => {
  const { register, handleSubmit,reset } = useForm();
  const [aviso, setAviso] = useState("");

  const salvar = async (campos) => {
    try {
      const response = await api.post("usuarios", campos);
      setAviso(`Prestador cadastrado com sucesso!"`);
      reset();
    } catch (error) {
      setAviso("Erro ao cadastrar prestador!");
    }
  };

  return (
    <div className="container-fluid bg-dark text-light min-vh-100 d-flex align-items-center">
      <div className="container p-5 bg-light text-dark rounded">
        <h4 className="fst-italic mb-3">Cadastrar Prestador de Serviços</h4>
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
            <label htmlFor="cnpj">CNPJ:</label>
            <input
              type="text"
              className="form-control"
              id="cnpj"
              required
              autoFocus
              {...register("cnpj")}
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
            <label htmlFor="razao_social">Razão Social:</label>
            <input
              type="text"
              className="form-control"
              id="razao_social"
              required
              {...register("razao_social")}
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
          <div className="form-group">
            <label htmlFor="rua">Rua:</label>
            <input
              type="text"
              className="form-control"
              id="rua"
              required
              autoFocus
              {...register("rua")}
            />
          </div>   
          <div className="form-group">
            <label htmlFor="cidade">Cidade:</label>
            <input
              type="text"
              className="form-control"
              id="cidade"
              required
              autoFocus
              {...register("cidade")}
            />
          </div>   
          <div className="form-group">
            <label htmlFor="estado">Estado:</label>
            <input
              type="text"
              className="form-control"
              id="estado"
              required
              autoFocus
              {...register("estado")}
            />
          </div> 
          <div className="form-group">
            <label htmlFor="pais">País:</label>
            <input
              type="text"
              className="form-control"
              id="pais"
              required
              autoFocus
              {...register("pais")}
            />
          </div> 
          <div className="form-group">
            <label htmlFor="cep">CEP:</label>
            <input
              type="text"
              className="form-control"
              id="cep"
              required
              autoFocus
              {...register("cep")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="numero">Número:</label>
            <input
              type="number"
              className="form-control"
              id="numero"
              required
              autoFocus
              {...register("numero")}
            />
          </div>   
          <div className="form-group">
            <label htmlFor="complemento">Complemento:</label>
            <input
              type="text"
              className="form-control"
              id="complemento"
              required
              autoFocus
              {...register("complemento")}
            />
          </div>      
          <input
            type="submit"
            className="btn btn-primary mt-3"
            value="Enviar"
          />
          <input
            type="reset"
            className="btn btn-danger mt-3 ms-3"
            value="Limpar"
          />
        </form>
        <div className="alert mt-3">{aviso}</div>
      </div>
    </div>
  );
};

export default Cadastrar_prestador;
