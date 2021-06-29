import { API_KEY, API_URL } from "./settings";

const getTrends = async () => {
  const URL = `${API_URL}/trending/searches?api_key=${API_KEY}`;
  console.log(URL);
  const res = await fetch(URL);
  console.log({ res });
  const gifs = createArrayTrends(await res.json());
  console.log({ gifs });
  return gifs;
};
export default getTrends;

const createArrayTrends = (apiResponse) => {
  const { data = [] } = apiResponse;
  console.log({ data });
  return data;
};
