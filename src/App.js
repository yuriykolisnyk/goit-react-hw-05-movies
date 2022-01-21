import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';

import Navigation from './components/Navigation';
import Container from './components/Container';

const HomePage = lazy(() => import('./views/HomePage' /* webpackChunkName: "HomePage" */));
const MoviesPage = lazy(() => import('./views/MoviesPage' /* webpackChunkName: "MoviesPage" */));
const NotFoundView = lazy(() =>
  import('./views/NotFoundView' /* webpackChunkName: "NotFoundView" */),
);
const MovieDetailsPage = lazy(() =>
  import('./views/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */),
);

export default function App() {
  return (
    <Container>
      <Navigation />
      <Suspense fallback={<Oval wrapperClass="Loader" arialLabel="loading-indicator" />}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}
