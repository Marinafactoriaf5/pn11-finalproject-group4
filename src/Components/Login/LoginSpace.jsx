import "./LoginSpace.css";
import Logo from "../Header/logo";

function LoginSpace() {
    return (
        <div className="bodyLogin">
            <div className="logoLogin">
            <Logo/>
            </div>
            <div className="boxInput">
                <input type="text" placeholder="User Name-Usuario"/>
                <input type="text" placeholder="Password-Contraseña"/>
                <button className="buttonLogin">Log In - Iniciar Sesion</button>
            </div>

        </div>
    )
}









export default LoginSpace;