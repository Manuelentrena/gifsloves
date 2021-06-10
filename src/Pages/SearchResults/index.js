import React, { useCallback, useRef, useEffect } from "react";
import ListOfGifs from "components/ListOfGifs";
import Spinner from "components/Spinner";
import { useGifs } from "hooks/useGifs";
import useNearScreen from "hooks/useNearScreen";
import debounce from "just-debounce-it";
import "./styles.css";
import { Helmet } from "react-helmet";

const SearchResults = ({ params }) => {
  const { keyword } = params;
  const { loading, setPage, gifs } = useGifs(keyword);
  const externalRef = useRef(null);
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });

  const title = gifs ? `${keyword} GIFs` : "";

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 500),
    []
  );

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage();
  }, [debounceHandleNextPage, isNearScreen]);

  return (
    <>
      <div className="Page">
        <h2 className="Search__title">Gifs de {decodeURI(keyword)}</h2>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <Helmet>
              <title>{decodeURI(title)} | GifsLoves</title>
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
