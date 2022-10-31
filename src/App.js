import "./App.css";
import React, { useState } from "react";

import MovieList from "./components/MovieList";

let currentMovies = [
  {
    id: 1,
    title: "The Big Lebowski",
    // stars: 4,
    reviews: [
      { stars: 5, review: "Over the line!" },
      { stars: 4, review: "Really tied the room together." },
      { stars: 1, review: "Jackie Treehorn treats objects like women, man." },
    ],
  },
  {
    id: 2,
    title: "Plan 9 From Outer Space",
    // stars: 3,
    reviews: [
      { stars: 3, review: "What did I just watch?" },
      { stars: 2, review: "A perfect mess." },
    ],
  },
];

function App() {
  const [movies, setMovies] = useState(currentMovies);

  return (
    <div className="App">
      <MovieList movies={movies} setMovies={setMovies} />
    </div>
  );
}

export default App;
