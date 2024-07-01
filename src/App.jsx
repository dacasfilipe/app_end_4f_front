import Cadastrar_prestador from './components/cadastrar_prestador';
import FormularioLogin from './components/login';
import Cadastrar_Usuarios from './components/cadastrar_usuario';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import useAuth from './components/useAuth'; // Ajuste o caminho conforme necessário
import Agendamento from './components/agendamento';
import MenuSuperior from './components/menuSuperior';
import ProtectedRoute from './components/protectedRoute'; // Ajuste o caminho conforme necessário

const RoutesWithAuth = () => {
    const { autenticado } = useAuth();

    return (
        <Router>
            {autenticado && <MenuSuperior />}
            <Routes>
                <Route path="/login" element={<FormularioLogin />} />
                <Route path="/" element={autenticado ? <Navigate to="/tarefas" /> : <FormularioLogin />} />
                <Route path="/prestadores" element={
                    <ProtectedRoute>
                        <Cadastrar_prestador />
                    </ProtectedRoute>
                } />
                <Route path="/user" element={
                    <ProtectedRoute>
                        <Cadastrar_Usuarios />
                    </ProtectedRoute>
                } />
                <Route path="/agendamento" element={
                    <ProtectedRoute>
                        <Agendamento />
                    </ProtectedRoute>
                } />
            </Routes>
        </Router>
    );
};

const App = () => {
    return (
        <RoutesWithAuth>
            <FormularioLogin />
        </RoutesWithAuth>
    );
};

export default App;