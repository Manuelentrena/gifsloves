import React from "react";
import Home from "./Pages/Home/index";
import SearchResults from "./Pages/SearchResults/index";
import Detail from "./Pages/Detail/index";
import { Route, Link } from "wouter";
import "./App.css";
import Logo from "./components/Logo";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to="/">
          <Logo />
        </Link>
        <Route path="/" component={Home} />
        <Route path="/search/:keyword" component={SearchResults} />
        <Route path="/gif/:id" component={Detail} />
      </section>
    </div>
  );
}

export default App;
