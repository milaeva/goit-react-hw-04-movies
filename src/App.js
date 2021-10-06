import { Route, Switch } from "react-router";
import Navigation from "./components/Navigation/Navigation ";
import HomePage from "./views/HomePage";
import MovieCard from "./views/MovieCard";
import SearchMovie from "./views/SearchMovie";
function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/movies" exact>
          <SearchMovie />
        </Route>
        <Route path="/movies/:movieId">
          <MovieCard />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
