import React from "react";
import useForm from "./useForm.js";
import { useLocation } from "wouter";

const RATINGS = ["g", "pg", "pg-13", "r"];
const LANGUAGES = ["es", "en"];

const SearchForm = () => {
  /* Miramos la ruta y extraemos los parametros */
  const [_, setLocation] = useLocation();

  const {
    keyword,
    rating,
    times,
    language,
    updateKeyword,
    updateRating,
    updateLanguage,
    reset,
  } = useForm({
    inicialKeyword: "",
    inicialRating: "g",
    inicialLanguage: "es",
  });
  //onsubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    setLocation(`/search/${keyword}/${rating}/${language}`);
  };

  return (
    <form className="header__form" onSubmit={handleSubmit}>
      <div className="header__options">
        <input
          type="text"
          placeholder="Search a gif here..."
          className="header__input"
          value={keyword}
          onChange={(e) => {
            updateKeyword(e.target.value);
          }}
        />
        <select
          className="header__filter"
          value={rating}
          onChange={(e) => {
            updateRating(e.target.value);
          }}
        >
          <option disabled>Rating type</option>
          {RATINGS.map((rating) => (
            <option key={rating}>{rating}</option>
          ))}
        </select>
        <select
          className="header__filter"
          value={language}
          onChange={(e) => updateLanguage(e.target.value)}
        >
          <option disabled>Language</option>
          {LANGUAGES.map((language) => (
            <option key={language}>{language}</option>
          ))}
        </select>
        <button className="header__button" type="submit">
          BUSCAR
        </button>

        <small className="header__counter">{times}</small>
      </div>
      <button type="reset" className="header__reset" onClick={reset}>
        Reset
      </button>
    </form>
  );
};

export default React.memo(SearchForm);
