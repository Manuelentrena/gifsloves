import { API_KEY, API_URL } from "./settings";

const responseToGif = (apiResponse) => {
  const { data = [] } = apiResponse;
  const { id, title, images } = data;
  const { url } = images.downsized_medium;
  return { id, title, url };
};

const getSingleGif = async (id) => {
  return await fetch(`${API_URL}/gifs/${id}?api_key=${API_KEY}`)
    .then((res) => res.json())
    .then(responseToGif);
};

export default getSingleGif;
