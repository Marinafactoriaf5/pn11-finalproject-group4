import React from "react";
import "./LoginSpace.css";
import Logo from "../../assets/Logo.png";
import { useState } from "react";
import Img from "../../assets/loginBackground.jpeg"

const LoginSpace = () => {
  const [showPwd, setShowPwd] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name !== "" && password !== "" ) {
      setError(false)
      console.log(name , password)
      
    }
    else{
      setError (true)
    }
  };

  return (
    <div className="Login">
      <div className="bodyLoginBackground">
        <img src={Img} alt="Chachi"></img>
      </div>
      <div className="bodyLogin">
        <a href="/" className="logoLink">
          <img src={Logo} alt="Logo" className="logoImage" />
        </a>
        <div className="bodySquare">
          <div className="bodySquareDiv">
            <form onSubmit={handleSubmit}>
              <div className="form-floating">
                <label htmlFor="userid">Correo Electrónico</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="userNameInput"
                  placeholder="correo@ejemplo.com"
                  id="userid"
                />
              </div>
              <div className="form-floating mt-3">
                <label htmlFor="password">Contraseña</label>
                <div
                  className="position-absolute pointer pwd-icon"
                  onClick={() => setShowPwd(!showPwd)}
                >
                  {/* (Código del ícono omitido para mayor claridad) */}
                </div>
                <input
                  type={showPwd ? "text" : "password"}
                  className="passwordInput"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="1234ABCD"
                  id="password"
                />
              </div>
              <div className="px-5">
                <button
                  type="submit"
                  className="text-white btn-purple mt-3 text-center py-2 fw-semibold fs-4 rounded-3 w-100 border border-4 border-white shadow"
                >
                  Iniciar Sesión
                </button>
              </div>
              {error && <p>Todos los campos son obligatorios</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSpace;

