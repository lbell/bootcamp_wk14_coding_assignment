import React from "react";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";
import Stars from "./Stars";

function averageStars(reviews) {
  let stars = [];
  for (let i = 0; i < reviews.length; i++) {
    if (reviews[i].stars) {
      stars.push(reviews[i].stars);
    }
  }

  const average = stars.reduce((a, b) => a + b) / stars.length;

  return Math.round(average);
}

export default function Movie({
  id,
  title,
  //   stars,
  reviews,
  movies,
  setMovies,
}) {
  let starAvg = averageStars(reviews);
  return (
    // div
    <div className="movie card shadow p-3 mb-5 bg-body rounded">
      <h1>{title}</h1>
      Average Rating <Stars stars={starAvg} />
      <hr />
      <h2>User Reviews:</h2>
      <ReviewList reviews={reviews} />
      <hr />
      <ReviewForm id={id} movies={movies} setMovies={setMovies} />
    </div>
  );
}
