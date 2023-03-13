import scss from '../ListMovie/ListMovie.module.scss';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const ListMovie = ({ movies }) => {
  const location = useLocation();

  console.log('List', location);
  const list = movies.map(({ id, title, poster_path }) => {
    return (
      <li className={scss.list} key={id}>
        <Link
          className={scss.name}
          to={`/movies/${id}`}
          state={{ from: location }}
        >
          <img
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt="{original_title}"
            width="300"
          />
          {title}
        </Link>
      </li>
    );
  });

  return <ul className={scss.wrapper}>{list}</ul>;
};

export default ListMovie;

ListMovie.propTypes = {
  movies: PropTypes.array,
};
