import { useState, useEffect } from 'react';

import { API } from 'components/shared/api';

import ListMovie from 'components/shared/ListMovie/ListMovie';

const Trending = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchMovie() {
      try {
        const data = await API.fetchTrend();
        setItems(data.results);
      } catch (error) {
        setError(error.message || 'Something wrong! Try later!');
      }
    }
    fetchMovie();
  }, []);

  return <>{error ? <p>Error</p> : <ListMovie movies={items} />}</>;
};

export default Trending;
