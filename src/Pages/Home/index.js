import ListOfGifs from "components/ListOfGifs";
import Spinner from "components/Spinner";
import { useGifs } from "hooks/useGifs";
import { Helmet } from "react-helmet";
import "./styles.css";

const Home = () => {
  //hook para cargar gifs
  const { loading, gifs } = useGifs();

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://gifsloves.vercel.app/" />
        <title>Home GIFs | GifsLoves</title>
        <meta
          name="description"
          content="GifsLoves, Tu portal para buscar tus GIFs favoritos"
        />
      </Helmet>
      <div className="Page">
        <h2 className="home__title">Ultimós Gifs Buscados</h2>
        {loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}
      </div>
    </>
  );
};

export default Home;
