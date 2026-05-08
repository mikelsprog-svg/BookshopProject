import React from 'react';
import './ProfilePage.css'
import {Profile} from "../components/Profile/Profile.jsx";
import {useAuth} from "../AuthContext.jsx";

export function ProfilePage () {
    const {usuario} = useAuth();

    return (
        <div className="profilepage_body">
            <Profile user={usuario}/>
        </div>
    )
}

