import React from "react";
import "./LoginSpace.css";
import Logo from "../../assets/Logo.png";
import { useState } from "react";

const LoginSpace = () => {
  const [showPwd, setShowPwd] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || password === "") {
      setError(true);
      return;
    }

    // Aquí puedes agregar lógica adicional para manejar el envío del formulario
    // por ejemplo, llamando a una función para autenticar al usuario.
  };

  return (
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
                required
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
                required
              />
            </div>
            <div className="d-flex justify-content-end">
              <p className="d-inline-block m-0 pe-2 pt-2 fst-italic fw-semibold pointer forgot-text">
                ¿Olvidaste tu contraseña?
              </p>
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
  );
};

export default LoginSpace;

