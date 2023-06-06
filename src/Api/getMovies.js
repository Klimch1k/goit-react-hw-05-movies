import axios from 'axios';

const API_KEY = 'e1f0ba7edbc19668553e294a4c65bcf8';
const BASE_URL = 'https://api.themoviedb.org/3/';


const request = axios.create({
  baseURL: BASE_URL,
});

export const getTrendsMovies = () => {
  return request.get(`/trending/movie/day?api_key=${API_KEY}`);
};

export const getMovie = movieId => {
  return request.get(`/movie/${movieId}?api_key=${API_KEY}`);
};

export const getMovieCast = id => {
  return request.get(`movie/${id}/credits?api_key=${API_KEY}`);
};

export const getMovieReviews = id => {
  return request.get(`movie/${id}/reviews?api_key=${API_KEY}`);
};

export const getMoviesByName = query => {
  return request.get(`search/movie?api_key=${API_KEY}&query=${query}`);
};