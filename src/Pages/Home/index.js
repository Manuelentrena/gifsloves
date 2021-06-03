import React from "react";
import { Link } from "wouter";
import "./styles.css";

const Home = () => {
  return (
    <>
      <h2 className="home">Gifs más Populares</h2>
      <Link className="home__link" to="/search/panda">
        Gifs de Pandas
      </Link>
      <Link className="home__link" to="/search/rick">
        Gifs de Rick
      </Link>
      <Link className="home__link" to="/search/trigun">
        Gifs de Trigun
      </Link>
    </>
  );
};

export default Home;
