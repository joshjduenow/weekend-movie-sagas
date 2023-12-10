import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import MovieItem from "../Movieitem/MovieItem";
import "./MovieList.css";

export default function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

  return (
    <main>
      <h2>Movie List:</h2>
      <div>
        <section className="movies">
          {movies.map((movie, i) => (
            <MovieItem movie={movie} key={i} />
          ))}
        </section>
      </div>
    </main>
  );
}

