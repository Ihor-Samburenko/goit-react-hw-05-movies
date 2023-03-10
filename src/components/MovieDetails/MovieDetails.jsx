import { useState, useEffect } from 'react';
import {
  useParams,
  useNavigate,
  Link,
  Outlet,
  useLocation,
} from 'react-router-dom';
import { API } from 'components/shared/api';

import scss from '../MovieDetails/MovieDetails.module.scss';

const MovieDetails = () => {
  const [post, setPost] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  // const { from } = location.state;

  console.log('Details', location);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await API.getMovieDetails(id);
        setPost(data);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    };
    fetchPost();
  }, [id]);

  const goBack = () => navigate(location.state?.from ?? '');

  if (!post) {
    return;
  }

  const {
    original_title,
    overview,
    genres = [],
    poster_path,
    vote_average,
  } = post;
  const genresList = genres.map(({ id, name }) => <li key={id}>{name}</li>);
  return (
    <>
      <div>
        <button type="button" className={scss.btn} onClick={goBack}>
          Go back
        </button>
      </div>
      <div className={scss.wrapper}>
        <img
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt="{original_title}"
          width="300"
        />
        <div className={scss.list}>
          <h2>{original_title}</h2>
          <p>User score: {Math.round(vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genresList}</p>
          <Link state={{ from: location.state?.from ?? '/' }} to={`cast`}>
            Cast
          </Link>
          <Link state={{ from: location.state?.from ?? '/' }} to={`reviews`}>
            Reviews
          </Link>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
