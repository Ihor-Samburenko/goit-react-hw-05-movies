import { useState, useEffect } from 'react';
import { API } from 'components/shared/api';
import { Link, useSearchParams, useLocation } from 'react-router-dom';

import { Search } from 'components/Search/Search';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  // const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    async function getMovie() {
      try {
        const result = await API.getSearchMovie(search);
        setMovies(result.results);
      } catch (error) {
        console.log(error);
      }
    }
    if (search) {
      getMovie();
    }
  }, [search]);

  const handleUpdateSearch = query => {
    setSearchParams({
      query,
    });
  };

  const element = movies.map(({ id, title, poster_path }) => {
    if (!title || !poster_path) {
      return null;
    }
    return (
      <li key={id}>
        <Link to={`/movies/${id}`} state={{ from: location }}>
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
            width="300"
          />
          {title}
        </Link>
      </li>
    );
  });

  return (
    <div>
      <Search onSubmit={handleUpdateSearch} />
      <ul>{element}</ul>
    </div>
  );
};

export default MoviesPage;
