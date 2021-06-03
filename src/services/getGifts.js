const apiKey = "YcqqJ3vn16isx3qI6V5GrxBoyEwuk6zC";

const getGifts = async (keyword) => {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;
  const res = await fetch(apiURL);
  const { data } = await res.json();
  const gifs = data.map((image) => {
    const { id, title, images } = image;
    const { url } = images.downsized_medium;
    return { id, title, url };
  });
  return gifs;
};
export default getGifts;
