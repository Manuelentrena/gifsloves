import React from "react";
import "./Gif.css";

const Gif = ({ id, title, url }) => {
  return (
    <a href={`#${id}`} className="card">
      <div className="card__body">
        <h4 className="card__title">{title ? title : "Not Found"}</h4>
      </div>
      <img className="card__img" src={url} alt={title} />
    </a>
  );
};

export default Gif;
