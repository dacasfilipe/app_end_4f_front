import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormularioLogin from './components/login';
import Cadastrar_prestador from './components/cadastrar_prestador';
import Cadastrar_Usuarios from './components/cadastrar_usuario';
import Agendamento from './components/agendamento';
import MenuSuperior from './components/menuSuperior';
import useAuth from './components/useAuth'; // Ajuste o caminho conforme necessário

const App = () => {
    const { autenticado } = useAuth();

    return (
        <Router>
            {autenticado && <MenuSuperior />}
            <Routes>
                <Route path="/login" element={<FormularioLogin />} />
                <Route path="/" element={autenticado ? <Navigate to="/agendamento" /> : <FormularioLogin />} />
                <Route path="/prestadores" element={autenticado ? <Cadastrar_prestador /> : <Navigate to="/login" />} />
                <Route path="/user" element={autenticado ? <Cadastrar_Usuarios /> : <Navigate to="/login" />} />
                <Route path="/agendamento" element={autenticado ? <Agendamento /> : <Navigate to="/login" />} />
            </Routes>
        </Router>
    );
};

export default App;