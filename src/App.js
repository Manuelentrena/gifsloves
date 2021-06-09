import React, { Suspense } from "react";
import SearchResults from "Pages/SearchResults/index";
import Detail from "Pages/Detail/index";
import Error from "Pages/404/index";
import { Route } from "wouter";
import Header from "components/Header";
import LazyTrending from "components/TrendingSearches";
import StaticContext from "Provider/StaticContext";
import { GifsContextProvider } from "Provider/GifsContext";
import "./App.css";

const Homepage = React.lazy(() => import("./Pages/Home"));

function App() {
  return (
    <StaticContext.Provider
      value={{
        name: "entrena",
        suscribeiteAlCanal: true,
      }}
    >
      <div className="App">
        <Header />
        <Suspense fallback={null}>
          <section className="App-content">
            <GifsContextProvider>
              <Route path="/" component={Homepage} />
              <Route path="/search/:keyword" component={SearchResults} />
              <Route path="/gif/:id" component={Detail} />
              <Route path="/404" component={Error} />
            </GifsContextProvider>
            <aside>
              <LazyTrending />
            </aside>
          </section>
        </Suspense>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
