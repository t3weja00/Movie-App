import { fetchMovies, fetchShows } from "../models/Popular.js";

const getPopularContent = async (req, res, next) => {
  try {
    const movies = await fetchMovies();
    const shows = await fetchShows();
    return res.status(200).json({ movies, shows });
  } catch (error) {
    return next(error);
  }
};

export { getPopularContent };
