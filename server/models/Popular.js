import { ApiError } from "../helpers/apiError.js";
import axios from "axios";

const fetchMovies = async () => {
  try {
    const apiPath = `${process.env.API_URL}/3/movie/popular`;
    const response = await axios.get(apiPath, {
      params: { api_key: process.env.API_KEY },
    });
    return response.data.results || [];
  } catch (error) {
    const statusCode = error.response?.status || 500;
    const message =
      error.response?.data?.message || "Failed to fetch movie data";
    throw new ApiError(message, statusCode);
  }
};

const fetchShows = async () => {
  try {
    const apiPath = `${process.env.API_URL}/3/tv/popular`;
    const response = await axios.get(apiPath, {
      params: { api_key: process.env.API_KEY },
    });
    return response.data.results || [];
  } catch (error) {
    const statusCode = error.response?.status || 500;
    const message =
      error.response?.data?.message || "Failed to fetch tv show data";
    throw new ApiError(message, statusCode);
  }
};

export { fetchMovies, fetchShows };
