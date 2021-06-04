import { API_KEY, API_URL } from "./settings";

const getGifts = async (keyword, limit = 25) => {
  const URL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=0&rating=g&lang=en`;
  const res = await fetch(URL);
  const gifs = createArrayGifs(await res.json());
  return gifs;
};
export default getGifts;

const createArrayGifs = (apiResponse) => {
  const { data = [] } = apiResponse;
  if (Array.isArray(data)) {
    const gifs = data.map((image) => {
      const { id, title, images } = image;
      const { url } = images.downsized_medium;
      return { id, title, url };
    });
    return gifs;
  }
  return [];
};
