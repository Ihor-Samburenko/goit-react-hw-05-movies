import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { API } from 'components/shared/api';

const CastPage = () => {
  const [cast, setCast] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const data = await API.getCast(id);
        setCast(data.cast);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCast();
  }, [id]);

  const element = cast.map(
    ({ cast_id, original_name, character, profile_path }) => {
      return (
        <li key={cast_id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${profile_path}`}
            alt={original_name}
            width="150"
          />
          <p>Name: {original_name}</p>
          <p>Character: {character}</p>
        </li>
      );
    }
  );

  return (
    <>
      <h3>Additional informaton</h3>
      {element}
    </>
  );
};

export default CastPage;
