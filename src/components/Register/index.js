import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useLocation } from "wouter";
import useUser from "hooks/useUser";
import Spinner from "components/Spinner";

const initialValues = {
  username: "",
  email: "",
  password: "",
  repeatPassword: "",
};

const schemaForm = {
  username: Yup.string("").required("Input required"),
  email: Yup.string().email("Valid Email").required("Input required"),
  password: Yup.string().required("Input required"),
  repeatPassword: Yup.string()
    .required("Input required")
    .oneOf([Yup.ref("password")], "Different password"),
};

const Register = () => {
  const [, pushLocation] = useLocation();
  const { register, isLogin, isLoading, errorLogin } = useUser();

  useEffect(() => {
    if (isLogin) {
      pushLocation("/");
    }
  }, [isLogin, pushLocation]);

  const { handleSubmit, handleChange, errors, values } = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object(schemaForm),
    onSubmit: (formData) => {
      register({ ...formData });
    },
  });

  return (
    <form className="login__form" onSubmit={handleSubmit}>
      <h1 className="login__title">Your Gifs Platform</h1>
      {errorLogin && <h2 className="login__error">Incorrect Email</h2>}

      <label className="login__label">
        Username*:
        <input
          className="login__input"
          type="text"
          placeholder="Introduce your username..."
          autoComplete="off"
          name="username"
          onChange={handleChange}
          value={values.username}
        />
        <span className="login__error">{errors.username}</span>
      </label>

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

      <label className="login__label">
        Repeat Password*:
        <input
          className="login__input"
          type="password"
          placeholder="Introduce your repeat password..."
          autoComplete="off"
          name="repeatPassword"
          onChange={handleChange}
          value={values.repeatPassword}
        />
        <span className="login__error">{errors.repeatPassword}</span>
      </label>

      <span className="login__label login__info">*Required inputs</span>

      {isLoading ? (
        <Spinner />
      ) : (
        <button type="submit" className="login__button login__button--form">
          REGISTER
        </button>
      )}
    </form>
  );
};

export default Register;
