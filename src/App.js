import { Switch, Route } from 'react-router-dom';
import { lazy, Suspense } from "react";
import Loader from "react-loader-spinner";
import './App.scss';
import Navigation from './Navigation/Navigation';

const HoumeViews = lazy(() => import('./views/HoumeViews'/*webpackChunkName:"HoumeViews"*/));
const MoviesPage = lazy(() => import('./views/MoviesPage'/*webpackChunkName:"MoviesPage"*/));
const MovieDetailsPage = lazy(() => import('./MovieDetailsPage/MovieDetailsPage'/*webpackChunkName:"MovieDetailsPage"*/));
const NotFoundViews = lazy(() => import('./views/NotFoundViews'/*webpackChunkName:"NotFoundViews"*/));

function App() {
  return (
    <div className="App">
      <Navigation />
      <Suspense fallback={<Loader
        type="ThreeDots"
        color="#00BFFF"
        height={100}
        width={100}
      />}>
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
      </Suspense>
    </div>
  );
}

export default App;
