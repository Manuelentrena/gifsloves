import React, { useRef } from "react";
import Logo from "components/Logo";
import { useLocation } from "wouter";
import "./styles.css";

const Header = () => {
  //Estado del campo
  const [location, setLocation] = useLocation();
  //Referencia al input del form
  const keywordRef = useRef(null);
  //onsubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    setLocation(`/search/${keywordRef.current.value}`);
  };
  return (
    <header>
      <Logo />
      <form className="header__form" onSubmit={handleSubmit}>
        <input
          type="text"
          ref={keywordRef}
          placeholder="Search a gif here..."
          className="header__input"
        />
        <button className="header__button" type="submit">
          BUSCAR
        </button>
      </form>
    </header>
  );
};

export default Header;
