import { Link } from "react-router-dom";

const MenuSuperior = () => {
  return (
    <nav className="navbar navbar-expand-sm" style={{ backgroundColor: '#67cfcf' }}>
      <div className="container">
        <Link to="/" className="navbar-brand">Logout</Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/prestadores" className="nav-link">Cadastrar Prestador</Link>
          </li>
          
          <li className="nav-item">
            <Link to="/agendamento" className="nav-link">Agendamentos</Link>
          </li>
          <li className="nav-item">
            <Link to="/user" className="nav-link">Cadastrar Usuário</Link>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

export default MenuSuperior;