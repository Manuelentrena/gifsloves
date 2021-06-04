import React from "react";
import Gif from "../../components/Gif";
import useGlobalGifs from "../../hooks/useGlobalGifs";
import "./styles.css";

const Detail = ({ params }) => {
  const { id } = params;
  const gifs = useGlobalGifs();
  const gif = gifs.find((gif) => gif.id === id);
  console.log(gif);
  return (
    <div className="Page">
      <h2 className="Detail__title">{decodeURI(gif.title)}</h2>
      {<Gif {...gif} key={gif.id} />}
    </div>
  );
};

export default Detail;
