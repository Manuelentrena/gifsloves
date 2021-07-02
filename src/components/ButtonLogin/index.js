import React, { useEffect, useState } from "react";
import { useLocation } from "wouter";
import useUser from "hooks/useUser";
import "./styles.css";
import { useCallback } from "react";

function ButtonLogin() {
  const { isLogin, logout, getUser } = useUser();
  const [location, setLocation] = useLocation();
  const [userName, SetUserName] = useState(null);

  useEffect(() => {
    const callAPI = async () => {
      if (isLogin) {
        const { username } = await getUser();
        SetUserName(username);
      }
    };
    callAPI();
  }, [isLogin]);

  const handleClickLogin = () => {
    isLogin ? logout() : setLocation(`/login`);
  };

  const handleClickRegister = () => {
    isLogin ? logout() : setLocation(`/register`);
  };

  const [textRegister, textLogin, classLogin] = isLogin
    ? [`Hola, ${userName}`, "LOGOUT", "login__register"]
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

export default ButtonLogin;
