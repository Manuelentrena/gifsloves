import React, { useCallback, useRef, useEffect } from "react";
import ListOfGifs from "components/ListOfGifs";
import Spinner from "components/Spinner";
import { useGifs } from "hooks/useGifs";
import useNearScreen from "hooks/useNearScreen";
import debounce from "just-debounce-it";
import "./styles.css";
import { Helmet } from "react-helmet";

const SearchResults = ({ params }) => {
  const { keyword, rating = "g", language } = params;
  const { loading, setPage, gifs } = useGifs(keyword, rating, language);
  const externalRef = useRef(null);
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });

  const title = gifs ? `${gifs.length} resultados de ${keyword}` : "";

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 500),
    [setPage]
  );

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage();
  }, [debounceHandleNextPage, isNearScreen]);

  return (
    <>
      <div className="Page">
        <h2 className="Search__title">
          {decodeURI(keyword).charAt(0).toUpperCase() +
            decodeURI(keyword).slice(1)}{" "}
          gifs
        </h2>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <Helmet>
              <link
                rel="canonical"
                href={`https://gifsloves.vercel.app/search/${keyword}`}
              />
              <title>{decodeURI(title)}</title>
              <meta
                name="description"
                content={`Lista de Gifs sobre ${decodeURI(title)}`}
              ></meta>
            </Helmet>
            <ListOfGifs gifs={gifs} />
            <div id="visor" ref={externalRef}></div>
          </>
        )}
      </div>
    </>
  );
};

export default SearchResults;
