import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { API } from 'components/shared/api';

const ReviewsPage = () => {
  const [reviews, setReviws] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await API.getReviews(id);
        setReviws(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchReviews();
  }, [id]);

  const element = reviews.map(({ author, content, id }) => {
    return (
      <li key={id}>
        <h3>Author: {author}</h3>
        <p>Content: {content}</p>
      </li>
    );
  });

  return <>{element}</>;
};

export default ReviewsPage;
