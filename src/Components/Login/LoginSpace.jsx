import "./LoginSpace.css";
import Logo from "../../assets/logo.png";


function LoginSpace() {
    return (
        <div className="bodyLogin">
            <img className="logoLogin" src={Logo} alt="logo" />
            <div className="boxInput">
                <input type="text" placeholder="Usuario"/>
                <input type="password" placeholder="Contraseña"/>
                <a className="btn" href="http://localhost:5174/HomePage">Iniciar Sesion</a>
            </div>
        </div>
    )
}


//import { useState, useEffect, createElement } from "react";
//import { useNavigate } from "react-router-dom";

//function showAlertMessage(message, parentEl){
//
//function FormLogin({adminUsers}) {
//    const localStorage = window.localStorage;
//    const navigate = useNavigate();
//    const [isLogged, setIsLogged] = useState(flase);

//    useEffect(( ) => {
//        validateUser();
//        if(isLogged){
//            navigate('/dashboard');
//        }
//    }, []);


//}






export default LoginSpace;



