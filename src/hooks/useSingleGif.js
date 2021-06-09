import { useEffect, useState } from "react";
import { useGifs } from "hooks/useGifs";
import getSingleGif from "services/getSingleGif";

const useSingleGif = ({ id }) => {
  const { gifs } = useGifs();
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
          console.log(err);
          setIsLoading(false);
          setIsError(true);
        });
    }
  }, [gif, id]);
  return { gif, isLoading, isError };
};

export default useSingleGif;
