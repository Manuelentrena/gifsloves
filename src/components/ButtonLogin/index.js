import React from "react";
import { useLocation } from "wouter";
import useUser from "hooks/useUser";
import "./styles.css";
export default function ButtonLogin() {
  const { isLogin, logout } = useUser();
  const [location, setLocation] = useLocation();

  const handleClick = () => {
    /* Leer si esta registrado */
    isLogin ? logout() : setLocation(`/login`);
  };

  return location !== "/login" && location !== "/register" ? (
    <div className="login__container">
      <button className="login__button" onClick={handleClick}>
        {isLogin ? "LOGOUT" : "LOGIN"}
      </button>
    </div>
  ) : null;
}
