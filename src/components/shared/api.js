import axios from 'axios';

const API_KEY = 'b72fb3135a2d69ab2146fd23de192433';
const BASE_URL = 'https://api.themoviedb.org/3';

export const API = {
  async fetchTrend() {
    const response = await axios(
      `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
    );
    return response.data;
  },

  async getMovieDetails(id) {
    const response = await axios(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
    return response.data;
  },
  async getSearchMovie(query) {
    const response = await axios(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
    );
    return response.data;
  },

  async getCast(id) {
    const response = await axios(
      `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
    );
    return response.data;
  },

  async getReviews(id) {
    const response = await axios(
      `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`
    );
    return response.data;
  },
};
