import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const ResultCard = ({ movie }) => {
  const { addMovieToWatchList, addMovieToWatched, watchlist, watched } =
    useContext(GlobalContext);
  let staredMovie = watchlist.find((o) => o.id === movie.id);
  let storedMovieWatch = watched.find((mv) => mv.id === movie.id);
  const watchlistDisable = staredMovie ? true : storedMovieWatch ? true : false;
  const watchedDisable =  storedMovieWatch ? true : false;
  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title}poster`}
          />
        ) : (
          <div className="filter-poster"></div>
        )}
      </div>
      <div className="infor">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
          </h4>
        </div>
        <div className="controls">
          <button
            className="btn"
            disabled={watchlistDisable}
            onClick={() => addMovieToWatchList(movie)}
          >
            Add to WatchList
          </button>
          <button
            className="btn"
            disabled={watchedDisable}
            onClick={() => addMovieToWatched(movie)}
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
