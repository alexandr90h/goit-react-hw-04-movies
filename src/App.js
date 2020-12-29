import { Switch, Route } from 'react-router-dom';
import './App.scss';
import Navigation from './Navigation/Navigation';
import HoumeViews from "./views/HoumeViews";
import MoviesPage from "./views/MoviesPage";
import NotFoundViews from "./views/NotFoundViews";
import MovieDetailsPage from "./MovieDetailsPage/MovieDetailsPage"

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route  path="/" exact>
        <HoumeViews/>
      </Route>
      <Route path="/movies" exact>
        <MoviesPage />
        </Route>
        <Route path="/movies/:movieId">
          <MovieDetailsPage/>
        </Route>
      <Route>
        <NotFoundViews />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
