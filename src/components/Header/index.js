import React from "react";
import Logo from "components/Logo";
import SearchForm from "components/SearchForm";
import { useLocation } from "wouter";

import "./styles.css";

const Header = () => {
  //Estado del campo
  const [location, setLocation] = useLocation();

  //onsubmit
  const handleSubmit = (keyword) => {
    setLocation(`/search/${keyword}`);
  };

  return (
    <header>
      <Logo />
      <SearchForm onSubmit={handleSubmit} />
    </header>
  );
};

export default Header;
