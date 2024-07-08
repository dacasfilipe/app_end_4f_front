import React from 'react';
import { useAuth } from './useAuth'; // Ajuste o caminho conforme necessário

const LogoutButton = () => {
    const { logout } = useAuth();

    return (
        <button onClick={logout} className="btn btn-danger">
            Logout
        </button>
    );
};

export default LogoutButton;