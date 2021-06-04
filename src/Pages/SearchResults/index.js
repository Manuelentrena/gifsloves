import ListOfGifs from "../../components/ListOfGifs";
import Spinner from "../../components/Spinner";
import { useGifs } from "../../hooks/useGifs";
import "./styles.css";

const SearchResults = ({ params }) => {
  const { keyword } = params;
  const { loading, gifs } = useGifs(keyword);

  return (
    <div className="Page">
      <h2 className="Search__title">Gifs de {decodeURI(keyword)}</h2>
      {loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}
    </div>
  );
};

export default SearchResults;
