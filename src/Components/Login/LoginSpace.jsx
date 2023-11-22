import "./LoginSpace.css";
import Logo from "../../assets/logo.png";

function LoginSpace() {
    return (
        <div className="bodyLogin">
            <img className="logoLogin" src={Logo} alt="logo" />
            <div className="boxInput">
                <input type="text" placeholder="User Name-Usuario"/>
                <input type="text" placeholder="Password-Contraseña"/>
                <button className="buttonLogin">Log In - Iniciar Sesion</button>
            </div>

        </div>
    )
}









export default LoginSpace;