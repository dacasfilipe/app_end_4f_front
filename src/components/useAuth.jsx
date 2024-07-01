import { useState, useEffect } from 'react';

const useAuth = () => {
    const [autenticado, setAutenticado] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setAutenticado(true);
        } else {
            setAutenticado(false);
        }
    }, []);

    const login = () => {
        setAutenticado(true);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setAutenticado(false);
    };

    return { autenticado, login, logout };
};

export default useAuth;