import React, { useCallback, useRef, useEffect } from "react";
import ListOfGifs from "components/ListOfGifs";
import Spinner from "components/Spinner";
import { useGifs } from "hooks/useGifs";
import useNearScreen from "hooks/useNearScreen";
import debounce from "just-debounce-it";
import "./styles.css";
import useSEO from "hooks/useSEO";

const SearchResults = ({ params }) => {
  const { keyword } = params;
  const { loading, setPage, gifs } = useGifs(keyword);
  const externalRef = useRef(null);
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });

  const title = gifs ? `${keyword} GIFs` : "";
  useSEO({ title });

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 500),
    []
  );

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage();
  }, [debounceHandleNextPage, isNearScreen]);

  return (
    <div className="Page">
      <h2 className="Search__title">Gifs de {decodeURI(keyword)}</h2>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <ListOfGifs gifs={gifs} />
          <div id="visor" ref={externalRef}></div>
        </>
      )}
      {/* <button className="Search_button" type="button" onClick={handleNextPage}>
        MORE GIFS
      </button> */}
    </div>
  );
};

export default SearchResults;
