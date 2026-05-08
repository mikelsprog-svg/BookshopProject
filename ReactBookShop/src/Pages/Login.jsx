import './Login.css'
import google_logo from '../assets/google-logo.png'
import facebook_logo from '../assets/facebook-logo.png'

export function Login() {
    
    
  const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function handleChange(e) {
        const value = e.target.value;
        setEmail(value);
        if (value === "" || validateEmail(value)) {
            setError("");
        } else {
            setError("Introduce un correo electrónico válido.");
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (validateEmail(email)) {
            console.log("Correo enviado:", email);
            setEmail("");
            setError("");
        } else {
            setError("Introduce un correo electrónico válido.");
            alert("El correo no es válido");
        }
    }

    return (

        <main className = "Login">
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
            <div className = "login_form_div">
                <form className="login_form">
                    <label htmlFor='email'>Correo electrónico</label>
                    <input id = 'email' type = 'email' placeholder='Introduce tu correo' value={email} onChange={handleChange} />  
                    <label htmlFor='password'>Contraseña</label>
                    <input id = 'password' type = 'password' placeholder='Introduce tu contraseña'/>     
                </form>
            </div>
            <div className = 'extra_options'>
                <label className='remember' htmlFor='remember'>
                <input id = 'remember' type = 'checkbox' />
                Recuérdame
                </label>
                <a href='#' className='forgot_password'>¿Olvidaste tu contraseña?</a>
            </div>
            
            <button className= 'enter_button' type = 'submit'> 
                Iniciar sesión
            </button>
            <div className='separator'>
                <hr></hr>
                <span>¿No tienes una cuenta? Regístrate aquí</span>
            </div>
        </main>

    );
}