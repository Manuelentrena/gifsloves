import React from "react";
import { useLocation } from "wouter";
import useUser from "hooks/useUser";
import "./styles.css";
export default function ButtonLogin() {
  const { isLogin, logout } = useUser();
  const [location, setLocation] = useLocation();

  const handleClickLogin = () => {
    isLogin ? logout() : setLocation(`/login`);
  };

  const handleClickRegister = () => {
    isLogin ? logout() : setLocation(`/register`);
  };

  const [textRegister, textLogin, classLogin] = isLogin
    ? ["BIENVENIDO...", "LOGOUT", "login__register"]
    : ["REGISTER", "LOGIN", null];

  return location !== "/login" && location !== "/register" ? (
    <div className="login__container">
      <button
        className={`login__button ${classLogin}`}
        onClick={handleClickRegister}
      >
        {textRegister}
      </button>

      <button className="login__button" onClick={handleClickLogin}>
        {textLogin}
      </button>
    </div>
  ) : null;
}
