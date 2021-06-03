import React, { useEffect, useState } from "react";
import ListOfGifs from "../../components/ListOfGifs";
import getGifts from "../../services/getGifts";

const SearchResults = ({ params }) => {
  const { keyword } = params;
  /* Estado de los gifs */
  const [gifs, setGifs] = useState([]);
  /* Buscamos los bifs en la API */
  useEffect(() => {
    getGifts(keyword).then((data) => setGifs(data));
  }, [keyword]);
  /* Renderizamos los gifs */
  return (
    <>
      <ListOfGifs gifs={gifs} />
    </>
  );
};

export default SearchResults;
