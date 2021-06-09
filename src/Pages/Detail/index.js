import React from "react";
import Gif from "components/Gif";
import useSingleGif from "hooks/useSingleGif";
import "./styles.css";
import Spinner from "components/Spinner";
import { Redirect } from "wouter";
import useSEO from "hooks/useSEO";

const Detail = ({ params }) => {
  const { id } = params;
  const { gif, isLoading, isError } = useSingleGif({ id });
  const title = gif ? gif.title : "Gif Not Found";
  useSEO({ description: `GIF of ${title}`, title });
  if (isLoading) return <Spinner />;
  if (isError) return <Redirect to="/404" />;
  if (!gif) return null;

  return (
    <div className="Page">
      <h2 className="Detail__title">{decodeURI(gif.title)}</h2>
      {<Gif {...gif} key={gif.id} />}
    </div>
  );
};

export default Detail;
