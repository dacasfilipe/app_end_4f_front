import { useState } from "react";
import { useAuth } from './AuthProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import { api } from "../config_axios";
import { Helmet } from "react-helmet";

const FormularioLogin = () => {
    const [username, setUsername] = useState("");
    const [senha, setSenha] = useState("");
    const [lembrar, setLembrar] = useState(false); // Estado para lembrar-se de mim
    const [error, setError] = useState("");
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (username.trim() === "" || senha.trim() === "") {
            setError("Preencha todos os campos!");
            return;
        }

        try {
            const response = await api.post("/login", { username, senha });
            if (response.status === 200) {
                login();
            } else {
                setError("Usuário ou senha inválidos!");
            }
        } catch (error) {
            setError("Erro ao tentar logar. Tente novamente mais tarde.");
        }
    };

    return (
        <>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <section className="vh-100" style={{ backgroundImage: 'url(https://media.istockphoto.com/id/1394594963/pt/foto/calendar-with-pen-on-the-blue-empty-copy-space-for-text-concept-for-busy-timeline-organize.jpg?s=612x612&w=0&k=20&c=Pf-j6woka8PyyHsUu1oKOOhFSwNq0P2p5qe5SfXs8Dg=)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex align-items-center justify-content-center h-100">
                        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                            <h2 className="mb-4">Faça o Login</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="form-outline mb-4">
                                    <input type="text" id="username" className="form-control form-control-lg" value={username} onChange={(e) => setUsername(e.target.value)} />
                                    <label className="form-label" htmlFor="username">NOME DE USUÁRIO</label>
                                </div>
                                <div className="form-outline mb-4">
                                    <input type="password" id="senha" className="form-control form-control-lg" value={senha} onChange={(e) => setSenha(e.target.value)} />
                                    <label className="form-label" htmlFor="senha">SENHA</label>
                                </div>
                                <div className="form-check mb-3">
                                    <input type="checkbox" className="form-check-input" id="lembrar" checked={lembrar} onChange={(e) => setLembrar(e.target.checked)} />
                                    <label className="form-check-label" htmlFor="lembrar">Lembre-se de mim</label>
                                </div>
                                {error && <div className="alert alert-danger">{error}</div>}
                                <div className="d-grid gap-2 col-12 mx-auto">
                                    <button type="submit" className="btn btn-primary btn-lg btn-block">Entrar</button>
                                    <a href='http://localhost:5173/user' className="text-decoration-none mt-3">Ainda não possui login? Cadastre-se aqui</a>
                                    <a href='http://localhost:5173/prestadores' className="text-decoration-none mt-3">Cadastre-se como um Prestador de Serviços</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <footer className="text-center mt-4">Todos os direitos reservados.</footer>
            </section>
            
        </>
    );
};

export default FormularioLogin;
