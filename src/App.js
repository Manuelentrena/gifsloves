import React, { Suspense } from "react";
import { Route, Switch } from "wouter";

import SearchResults from "Pages/SearchResults/index";
import Detail from "Pages/Detail/index";
import Error from "Pages/404/index";

import Header from "components/Header";
import ButtonLogin from "components/ButtonLogin";
import LazyTrending from "components/TrendingSearches";
import Login from "Pages/Login";

import { GifsContextProvider } from "Provider/GifsContext";
import { UserContextProvider } from "Provider/UserContext";
import "./App.css";

const Homepage = React.lazy(() => import("./Pages/Home"));

function App() {
  /*   const [location] = useLocation(); */

  return (
    <UserContextProvider>
      <div className="App">
        <ButtonLogin />
        <Header />
        <Suspense fallback={null}>
          <section className="App-content">
            <GifsContextProvider>
              <Switch>
                <Route path="/" component={Homepage} />
                <Route
                  path="/search/:keyword/:rating?/:language?"
                  component={SearchResults}
                />
                <Route path="/gif/:id" component={Detail} />
                <Route path="/login" component={Login} />
                <Route path="/:rest*" component={Error} />
              </Switch>
            </GifsContextProvider>
            <aside>
              <LazyTrending />
            </aside>
          </section>
        </Suspense>
      </div>
    </UserContextProvider>
  );
}

export default App;
