import { useState, useEffect, useContext } from "react";
import getGifts from "services/getGifts";
import GifsContext from "Provider/GifsContext";
export const useGifs = (keyword) => {
  /* Estado de los gifs */
  const { gifs, setGifs } = useContext(GifsContext);
  /* const [gifs, setGifs] = useState([]); */
  const [loading, setLoading] = useState(false);
  /* Buscamos los bifs en la API */
  useEffect(() => {
    setLoading(true);
    const keywordToUse =
      keyword ?? localStorage.getItem("lastKeyword") ?? "gatitos";
    getGifts(keywordToUse).then((data) => {
      setGifs(data);
      setLoading(false);
      localStorage.setItem("lastKeyword", keywordToUse);
    });
  }, [keyword, setGifs]);

  return { loading, gifs };
};
