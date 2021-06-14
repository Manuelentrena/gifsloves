import { useState, useEffect, useContext } from "react";
import getGifts from "services/getGifts";
import GifsContext from "Provider/GifsContext";

const INITIAL_PAGE = 0;

export const useGifs = (keyword, rating, language) => {
  /* Estado de los gifs */
  const { gifs, setGifs } = useContext(GifsContext);
  const [page, setPage] = useState(INITIAL_PAGE);
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);

  const keywordToUse =
    keyword ?? localStorage.getItem("lastKeyword") ?? "gatitos";

  const ratingToUse = rating ?? localStorage.getItem("lastRating") ?? "g";
  /* Buscamos los bifs en la API */

  const languageToUse =
    language ?? localStorage.getItem("lastLanguage") ?? "es";

  useEffect(() => {
    if (
      keywordToUse !== localStorage.getItem("lastKeyword") ||
      ratingToUse !== localStorage.getItem("lastRating") ||
      languageToUse !== localStorage.getItem("lastLanguage") ||
      Object.keys(gifs).length === 0 ||
      loading !== false
    ) {
      setLoading(true);
      getGifts(keywordToUse, ratingToUse, languageToUse).then((data) => {
        setGifs(data);
        setLoading(false);
        localStorage.setItem("lastKeyword", keywordToUse);
        localStorage.setItem("lastRating", ratingToUse);
        localStorage.setItem("lastLanguage", languageToUse);
      });
    }
  }, [keyword, keywordToUse, ratingToUse, languageToUse, setGifs]);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;
    setLoadingNextPage(true);
    getGifts(keywordToUse, ratingToUse, languageToUse, page).then(
      (nextGifs) => {
        setGifs((prevGifs) => prevGifs.concat(nextGifs));
        setLoadingNextPage(false);
      }
    );
  }, [page, keywordToUse, setGifs, ratingToUse, languageToUse]);

  return { loading, loadingNextPage, gifs, setPage };
};
