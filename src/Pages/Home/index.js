import React, { useRef } from "react";
import ListOfGifs from "../../components/ListOfGifs";
import Spinner from "../../components/Spinner";
import { Link, useLocation } from "wouter";
import { useGifs } from "../../hooks/useGifs";
import "./styles.css";

const POPULAR_GIFS = ["Matrix", "Goku", "Berserk", "Rick"];

const Home = () => {
  //Estado del campo
  const [path, pushLocation] = useLocation();
  //hook para cargar gifs
  const { loading, gifs } = useGifs();
  //Referencia al input del form
  const keywordRef = useRef(null);
  //onsubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    pushLocation(`/search/${keywordRef.current.value}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={keywordRef}
          placeholder="Search a gif here..."
        />
      </form>
      <h2 className="home">Ultimós Gifs Buscados</h2>
      {loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}
      <h2 className="home">Gifs más Populares</h2>

      <ul className="home__list">
        {POPULAR_GIFS.map((popularGif) => (
          <li className="home__item" key={popularGif}>
            <Link className="home__link" to={`/search/${popularGif}`}>
              Gifs de {popularGif}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
