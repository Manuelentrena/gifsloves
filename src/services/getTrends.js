import { API_KEY, API_URL } from "./settings";

const getTrends = async () => {
  const URL = `${API_URL}/trending/searches?api_key=${API_KEY}`;
  const res = await fetch(URL);
  const gifs = createArrayTrends(await res.json());
  return gifs;
};
export default getTrends;

const createArrayTrends = (apiResponse) => {
  const { data = [] } = apiResponse;
  return data;
};
