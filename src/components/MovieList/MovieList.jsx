import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./MovieList.css";
import MovieItem from "../Movieitem/MovieItem";

export default function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

  return (
    <div>
      <h1>Movie List</h1>
      <section className="movies">
        {movies.map((movie) => {
          return <MovieItem key={movie.id} movie={movie} />;
        })}
      </section>
    </div>
  );
}
