import { useState, useEffect, useContext } from "react";
import getGifts from "services/getGifts";
import GifsContext from "Provider/GifsContext";

const INITIAL_PAGE = 0;

export const useGifs = (keyword) => {
  /* Estado de los gifs */
  const { gifs, setGifs } = useContext(GifsContext);
  const [page, setPage] = useState(INITIAL_PAGE);
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);

  const keywordToUse =
    keyword ?? localStorage.getItem("lastKeyword") ?? "gatitos";
  /* Buscamos los bifs en la API */
  useEffect(() => {
    setLoading(true);
    getGifts(keywordToUse).then((data) => {
      setGifs(data);
      setLoading(false);
      localStorage.setItem("lastKeyword", keywordToUse);
    });
  }, [keyword, keywordToUse, setGifs]);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;
    setLoadingNextPage(true);
    getGifts(keywordToUse, page).then((nextGifs) => {
      setGifs((prevGifs) => prevGifs.concat(nextGifs));
      setLoadingNextPage(false);
    });
  }, [page, keywordToUse, setGifs]);

  return { loading, loadingNextPage, gifs, setPage };
};
