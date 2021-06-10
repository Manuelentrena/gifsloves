import React from "react";
import Gif from "components/Gif";
import useSingleGif from "hooks/useSingleGif";
import "./styles.css";
import Spinner from "components/Spinner";
import { Redirect } from "wouter";
import { Helmet } from "react-helmet";

const Detail = ({ params }) => {
  const { id } = params;
  const { gif, isLoading, isError } = useSingleGif({ id });
  const title = gif ? gif.title : "Gif Not Found";
  if (isLoading) {
    console.log("aqui en loading...");
    return (
      <>
        <Helmet>
          <title>Cargando...</title>
        </Helmet>
        <Spinner />
      </>
    );
  }
  if (isError) return <Redirect to="/404" />;
  if (!gif) return null;
  console.log(title);
  return (
    <>
      <Helmet>
        <title>{decodeURI(title) + " | GifsLoves"}</title>
        <meta
          name="description"
          content={`Gif especifico titulado ${decodeURI(title)}`}
        />
      </Helmet>
      <div className="Page">
        <h2 className="Detail__title">{decodeURI(gif.title)}</h2>
        {<Gif {...gif} key={gif.id} />}
      </div>
    </>
  );
};

export default Detail;
