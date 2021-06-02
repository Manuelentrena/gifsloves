import React, { useEffect, useState } from "react";
import Gif from "./Gif";
import getGifts from "../services/getGifts";

const ListOfGifs = ({ params }) => {
  console.log(params);
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
      {gifs.map((gif) => (
        <Gif {...gif} key={gif.id} />
      ))}
    </>
  );
};
export default ListOfGifs;
