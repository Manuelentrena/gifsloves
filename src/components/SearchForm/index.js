import React from "react";
import useForm from "./useForm.js";
import { useLocation } from "wouter";

const RATINGS = ["g", "pg", "pg-13", "r"];

const SearchForm = () => {
  /* Miramos la ruta y extraemos los parametros */
  const [_, setLocation] = useLocation();

  const { keyword, rating, times, updateKeyword, updateRating } = useForm({
    lastKeyword: "",
    lastRating: "g",
  });
  //onsubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    setLocation(`/search/${keyword}/${rating}`);
  };

  return (
    <form className="header__form" onSubmit={handleSubmit}>
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
      <button className="header__button" type="submit">
        BUSCAR
      </button>
      <small className="header__counter">{times}</small>
    </form>
  );
};

export default React.memo(SearchForm);
