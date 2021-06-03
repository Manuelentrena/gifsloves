import React from "react";
import Gif from "../../components/Gif";
import useGlobalGifs from "../../hooks/useGlobalGifs";

const Detail = ({ params }) => {
  const { id } = params;
  const gifs = useGlobalGifs();
  const gif = gifs.find((gif) => gif.id === id);
  return <>{<Gif {...gif} key={gif.id} />}</>;
};

export default Detail;
