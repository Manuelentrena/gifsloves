import React from "react";
import "./styles.css";
import { Link } from "wouter";

const Gif = ({ id, title, url }) => {
  return (
    <Link to={`/gif/${id}`} className="card">
      <div className="card__body">
        <h4 className="card__title">{title ? title : "Not Found"}</h4>
      </div>
      <img loading="lazy" className="card__img" src={url} alt={title} />
    </Link>
  );
};

export default Gif;
