import React, { Suspense } from "react";
import SearchResults from "Pages/SearchResults/index";
import Detail from "Pages/Detail/index";
import Error from "Pages/404/index";
import { Route } from "wouter";
import Header from "components/Header";
import LazyTrending from "components/TrendingSearches";
import { GifsContextProvider } from "Provider/GifsContext";
import "./App.css";

const Homepage = React.lazy(() => import("./Pages/Home"));

function App() {
  /*   const [location] = useLocation(); */

  return (
    <div className="App">
      <Header /* location={location} */ />
      <Suspense fallback={null}>
        <section className="App-content">
          <GifsContextProvider>
            <Route path="/" component={Homepage} />
            <Route path="/search/:keyword/:rating?" component={SearchResults} />
            <Route path="/gif/:id" component={Detail} />
            <Route path="/404" component={Error} />
          </GifsContextProvider>
          <aside>
            <LazyTrending />
          </aside>
        </section>
      </Suspense>
    </div>
  );
}

export default App;
