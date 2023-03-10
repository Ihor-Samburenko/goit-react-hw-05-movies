import { Route, Routes } from 'react-router-dom';

import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('Pages/HomePages/HomePages'));
const MoviesPage = lazy(() => import('Pages/MoviesPage/MoviesPage'));
const NotFoundPage = lazy(() => import('./NotFoundPage/NotFoundPage'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const CastPage = lazy(() => import('./CastPage/CastPage'));
const ReviewsPage = lazy(() => import('./ReviewsPage/ReviewsPAge'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>...Loading</p>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<CastPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
