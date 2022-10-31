import React from "react";
import Movie from "./Movie";

export default function MovieList({ movies, setMovies }) {
  return (
    // div
    <div>
      {movies?.map((movie) => {
        return (
          <Movie
            // props
            key={movie.id}
            {...movie}
            setMovies={setMovies}
            movies={movies}
          />
        );
      })}
    </div>
  );
}
