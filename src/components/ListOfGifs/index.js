import Gif from "components/Gif";
import "./styles.css";

const ListOfGifs = ({ gifs }) => {
  return (
    <div className="grid">
      {gifs.map((gif) => (
        <Gif {...gif} key={gif.id} />
      ))}
    </div>
  );
};
export default ListOfGifs;
