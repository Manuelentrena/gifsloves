import React from "react";
import Home from "./Pages/Home/index";
import SearchResults from "./Pages/SearchResults/index";
import Detail from "./Pages/Detail/index";
import { Route, Link } from "wouter";
import Logo from "./components/Logo";
import StaticContext from "./Provider/StaticContext";
import { GifsContextProvider } from "./Provider/GifsContext";
import "./App.css";

function App() {
  return (
    <StaticContext.Provider
      value={{
        name: "entrena",
        suscribeiteAlCanal: true,
      }}
    >
      <div className="App">
        <section className="App-content">
          <Link to="/">
            <Logo />
          </Link>
          <GifsContextProvider>
            <Route path="/" component={Home} />
            <Route path="/search/:keyword" component={SearchResults} />
            <Route path="/gif/:id" component={Detail} />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
