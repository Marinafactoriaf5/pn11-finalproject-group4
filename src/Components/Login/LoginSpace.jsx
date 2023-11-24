import "./LoginSpace.css";
import Logo from "../../assets/logo.png";
import HeroPicture from "../../assets/hero.jpeg";

function LoginSpace() {
    return (
        <div className="bodyLogin">
            <img  src={HeroPicture}></img>
            <img className="logoLogin" src={Logo} alt="logo" />
            <div className="boxInput">
                <input type="text" placeholder="Usuario"/>
                <input type="password" placeholder="Contraseña"/>
                <a className="btn" href="http://localhost:5174/HomePage">Iniciar Sesion</a>
            </div>
        </div>
    )
}









export default LoginSpace;