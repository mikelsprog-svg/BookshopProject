import './Login.css'
import google_logo from '../assets/google-logo.png'
import facebook_logo from '../assets/facebook-logo.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../AuthContext'
import users from '../data/users.json'

export function Login() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { login } = useAuth();

    function handleChange(e) {
        const value = e.target.value;
        setName(value);
        if (value.trim() === "") {
            setError("");
        }
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
        if (error) {
            setError("");
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        const normalizedName = name.trim();
        const matchedUser = users.find(
            (user) => user.name.toLowerCase() === normalizedName.toLowerCase() && user.Pass === password
        );

        if (matchedUser) {
            login({
                id: matchedUser.Id,
                name: matchedUser.name,
                BillingAdresse: matchedUser.BillingAdresse,
            });
            setName("");
            setPassword("");
            setError("");
            navigate('/profileLOCKED');
        } else {
            setError("Nombre o contraseña incorrectos.");
        }
    }

    return (
        <main className="Login">
            <div className="login_title">
                <h1>INICIO DE SESIÓN</h1>
            </div>
            <div className='google_login_button'>
                <button className='google_button' type='button'>
                    <img className='google_logo' alt='Google' src={google_logo}/>
                    Iniciar sesión con Google
                </button>
            </div>
            <div className='facebook_login_button'>
                <button className='facebook_button' type='button'>
                    <img className='facebook_logo' alt='Facebook' src={facebook_logo}/>
                    Iniciar sesión con Facebook
                </button>
            </div>
            <div className="divider">
                <span>o</span>
            </div>
            <div className="login_form_div">
                <form className="login_form" onSubmit={handleSubmit}>
                    <label htmlFor='name'>Nombre</label>
                    <input
                        id='name'
                        type='text'
                        placeholder='Introduce tu nombre'
                        value={name}
                        onChange={handleChange}
                    />
                    <label htmlFor='password'>Contraseña</label>
                    <input
                        id='password'
                        type='password'
                        placeholder='Introduce tu contraseña'
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <p className="login-error">{error}</p>
                    <div className='extra_options'>
                        <label className='remember' htmlFor='remember'>
                            <input id='remember' type='checkbox'/>
                            Recuérdame
                        </label>
                        <a href='#' className='forgot_password'>¿Olvidaste tu contraseña?</a>
                    </div>
                    <button className='enter_button' type='submit'>
                        Iniciar sesión
                    </button>
                </form>
            </div>
            <div className='separator'>
                <hr/>
                <span>¿No tienes una cuenta? Regístrate aquí</span>
            </div>
        </main>
    );
}