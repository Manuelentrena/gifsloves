import React from "react";
import Logo from "components/Logo";
import SearchForm from "components/SearchForm";

import "./styles.css";

const Header = () => {
  return (
    <header>
      <Logo />
      <SearchForm />
    </header>
  );
};

export default Header;
