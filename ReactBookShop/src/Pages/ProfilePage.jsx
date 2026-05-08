import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfilePage.css'
import {Profile} from "../components/Profile/Profile.jsx";
import {useAuth} from "../AuthContext.jsx";

export function ProfilePage () {
    const {usuario, logout} = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/Login');
    };

    return (
        <div className="profilepage_body">
            <div className="profilepage_actions">
                <button className="logout_button" type="button" onClick={handleLogout}>
                    Cerrar sesión
                </button>
            </div>
            <Profile user={usuario}/>
        </div>
    )
}

