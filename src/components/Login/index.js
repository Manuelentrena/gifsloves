import React, { useRef, useEffect } from "react";
import { useLocation } from "wouter";
import useUser from "hooks/useUser";
import Spinner from "components/Spinner";
import "./styles.css";

const Login = () => {
  const [, pushLocation] = useLocation();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const { login, isLogin, isLoading, errorLogin } = useUser();

  useEffect(() => {
    isLogin && pushLocation("/");
  }, [isLogin, pushLocation]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    login({ email, password });
  };

  return (
    <form className="login__form" onSubmit={handleSubmit}>
      <h1 className="login__title">Tu Plataforma de Gifs</h1>
      {errorLogin && <h2 className="login__error">Usuario Incorrecto</h2>}
      <label className="login__label">
        Email:
        <input
          className="login__input"
          ref={emailRef}
          type="text"
          placeholder="Introduce your email..."
          autoComplete="off"
        />
      </label>

      <label className="login__label">
        Password:
        <input
          className="login__input"
          ref={passwordRef}
          type="password"
          placeholder="Introduce your password..."
          autoComplete="off"
        />
      </label>

      {isLoading ? (
        <Spinner />
      ) : (
        <button className="login__button login__button--form">LOGIN</button>
      )}
    </form>
  );
};

export default Login;
