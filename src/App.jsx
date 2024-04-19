import Cadastrar_prestador from './components/cadastrar_prestador';
import FormularioLogin from './components/login';
import Cadastrar_Usuarios from './components/cadastrar_usuario';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider, useAuth } from './components/AuthProvider';
import Agendamento from './components/agendamento';
import MenuSuperior from './components/menuSuperior';

const ProtectedRoute = ({ children }) => {
    const { autenticado } = useAuth();
    return autenticado ? children : <Navigate to="/login" />;
};

const RoutesWithAuth = () => {
    const { autenticado } = useAuth();

    return (
        <Router>
            {/* {autenticado && <MenuSuperior/>} */}
            <Routes>
                <Route path="/login" element={<FormularioLogin />} />
                <Route path="/" element={autenticado ? <Navigate to="/prestadores" /> : <FormularioLogin />} />
                <Route path="/prestadores" element={<><MenuSuperior /><Cadastrar_prestador /></>} />
                <Route path="/user" element={<><MenuSuperior /><Cadastrar_Usuarios /></>} />
                <Route path="/agendamento" element={<><MenuSuperior /><Agendamento /></>} />
            </Routes>
        </Router>
    );
};

const App = () => {
    return (
        <AuthProvider>
            <RoutesWithAuth/>
        </AuthProvider>
    );
};
  
export default App;