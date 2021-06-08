import React, { useRef } from "react";

const SearchForm = ({ onSubmit }) => {
  //Referencia al input del form
  const keywordRef = useRef(null);

  //onsubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(keywordRef.current.value);
  };

  return (
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
  );
};

export default React.memo(SearchForm);
