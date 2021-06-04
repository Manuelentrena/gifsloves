import React from "react";
import Home from "./Pages/Home/index";
import SearchResults from "./Pages/SearchResults/index";
import Detail from "./Pages/Detail/index";
import { Route } from "wouter";
import Header from "./components/Header";
import Category from "./components/Category";
import StaticContext from "./Provider/StaticContext";
import { GifsContextProvider } from "./Provider/GifsContext";
import "./App.css";

const POPULAR_GIFS = ["Matrix", "Goku", "Berserk", "Rick"];

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
        <section className="App-content">
          <GifsContextProvider>
            <Route path="/" component={Home} />
            <Route path="/search/:keyword" component={SearchResults} />
            <Route path="/gif/:id" component={Detail} />
          </GifsContextProvider>
          <aside>
            <Category name="Tendencias" options={POPULAR_GIFS} />
          </aside>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
