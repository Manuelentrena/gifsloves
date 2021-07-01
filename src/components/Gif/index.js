import React from "react";
import "./styles.css";
import { Link } from "wouter";
import Fav from "components/Fav";

const Gif = ({ id, title, url }) => {
  return (
    <div className="card">
      <div className="card__button">
        <Fav id={id} />
      </div>
      <Link to={`/gif/${id}`}>
        <div className="card__body">
          <h4 className="card__title">{title ? title : "Not Found"}</h4>
        </div>
        <img loading="lazy" className="card__img" src={url} alt={title} />
      </Link>
    </div>
  );
};

export default React.memo(Gif, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id;
});
