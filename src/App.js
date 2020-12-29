import { Switch, Route } from 'react-router-dom';
import './App.css';
import Navigation from './Navigation/Navigation';
import HoumeViews from "./views/HoumeViews";
import MoviesPage from "./views/MoviesPage";
import NotFoundViews from "./views/NotFoundViews";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/">
        <HoumeViews/>
      </Route>
      <Route path="/movies">
        <MoviesPage />
      </Route>
      <Route>
        <NotFoundViews />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
