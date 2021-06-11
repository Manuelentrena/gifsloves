import { useEffect, useState, useContext } from "react";
import getSingleGif from "services/getSingleGif";
import GifsContext from "Provider/GifsContext";

const useSingleGif = ({ id }) => {
  const { gifs } = useContext(GifsContext);
  const gifFromCache = gifs.find((singleGif) => singleGif.id === id);

  const [gif, setGif] = useState(gifFromCache);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!gif) {
      setIsLoading(true);
      //lamar al servicio de un gif
      getSingleGif(id)
        .then((gif) => {
          setGif(gif);
          setIsLoading(false);
          setIsError(false);
        })
        .catch((err) => {
          console.error(err);
          setIsLoading(false);
          setIsError(true);
        });
    }
  }, [gif, id]);
  return { gif, isLoading, isError };
};

export default useSingleGif;
