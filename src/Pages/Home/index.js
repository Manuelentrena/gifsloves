import ListOfGifs from "components/ListOfGifs";
import Spinner from "components/Spinner";
import { useGifs } from "hooks/useGifs";
import "./styles.css";

const Home = () => {
  //hook para cargar gifs
  const { loading, gifs } = useGifs();

  return (
    <div className="Page">
      <h2 className="home__title">Ultimós Gifs Buscados</h2>
      {loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}
    </div>
  );
};

export default Home;
