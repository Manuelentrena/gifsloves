import React from "react";
import { Link } from "wouter";
import "./styles.css";

const Categoty = ({ name, options = [] }) => {
  return (
    <div className="Category">
      <h2 className="Category__title">{name}</h2>
      <ul className="Category__list">
        {options.map((singleOption) => (
          <li className="Category__item" key={singleOption}>
            <Link className="Category__link" to={`/search/${singleOption}`}>
              {singleOption}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categoty;
