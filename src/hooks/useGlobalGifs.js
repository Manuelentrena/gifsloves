import { useContext } from "react";
import GifsContext from "Provider/GifsContext";

const useGlobalGifs = () => {
  return useContext(GifsContext).gifs;
};

export default useGlobalGifs;
