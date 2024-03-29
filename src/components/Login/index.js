import React, { useEffect } from "react";
import { useLocation } from "wouter";
import { useFormik } from "formik";
import * as Yup from "yup";
import useUser from "hooks/useUser";
import Spinner from "components/Spinner";
import "./styles.css";

const initialValues = {
  email: "",
  password: "",
};

const schemaForm = {
  email: Yup.string().email("Valid Email").required("Input required"),
  password: Yup.string().required("Input required"),
};

const Login = ({ onLogin }) => {
  const [, pushLocation] = useLocation();
  const { login, isLogin, isLoading, errorLogin } = useUser();

  useEffect(() => {
    if (isLogin) {
      pushLocation("/");
      onLogin && onLogin();
    }
  }, [isLogin, pushLocation, onLogin]);

  const { handleSubmit, handleChange, errors, values } = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object(schemaForm),
    onSubmit: (formData) => {
      login({ ...formData });
    },
  });

  return (
    <form className="login__form" onSubmit={handleSubmit}>
      <h1 className="login__title">Your Gifs Platform</h1>
      {errorLogin && <h2 className="login__error">Incorrect User</h2>}

      <label className="login__label">
        Email*:
        <input
          className="login__input"
          type="text"
          placeholder="Introduce your email..."
          autoComplete="off"
          name="email"
          onChange={handleChange}
          value={values.email}
        />
        <span className="login__error">{errors.email}</span>
      </label>

      <label className="login__label">
        Password*:
        <input
          className="login__input"
          type="password"
          placeholder="Introduce your password..."
          autoComplete="off"
          name="password"
          onChange={handleChange}
          value={values.password}
        />
        <span className="login__error">{errors.password}</span>
      </label>

      <span className="login__label login__info">*Required inputs</span>

      {isLoading ? (
        <Spinner />
      ) : (
        <button className="login__button login__button--form">LOGIN</button>
      )}
    </form>
  );
};

export default Login;
