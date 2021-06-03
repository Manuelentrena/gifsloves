import Gif from "../Gif";

const ListOfGifs = ({ gifs }) => {
  return (
    <>
      {gifs.map((gif) => (
        <Gif {...gif} key={gif.id} />
      ))}
    </>
  );
};
export default ListOfGifs;
