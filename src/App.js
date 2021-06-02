import React, { useState } from "react";
import ListOfGifs from "./components/ListOfGifs";
import { Route, Link } from "wouter";
import "./App.css";

function App() {
  const [keyword, setKeyword] = useState("Saint Seiya");
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to="/gif/panda">Gifs de Pandas</Link>
        <Link to="/gif/rick">Gifs de Rick</Link>
        <Link to="/gif/trigun">Gifs de Trigun</Link>
        <Route path="/gif/:keyword" component={ListOfGifs} />
        <button
          className="btn-change-gifs"
          onClick={() => setKeyword("Seint Seiya")}
        >
          CAMBIAR GIFS
        </button>
      </section>
    </div>
  );
}

export default App;
