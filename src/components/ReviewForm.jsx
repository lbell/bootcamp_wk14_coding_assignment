import React from "react";

export default function ReviewForm({ id, movies, setMovies }) {
  /**
   * Adds a review to the movies list and set's the Movies state to the new value
   */
  function addReview() {
    let newReview = document.getElementById(`review-${id}`);
    let newStar = document.getElementById(`stars-${id}`);

    // Some light entry validating...
    if (newStar.value <= 5 && newStar.value >= 1) {
      console.log("All good");
    } else {
      newStar.value = null;
    }

    if (newReview.value && newStar.value) {
      let newEntry = {
        stars: parseInt(newStar.value),
        review: newReview.value,
      };
      const updatedMovies = movies.map((movie) => {
        // if id equals target id, append review
        if (movie.id === id) {
          return {
            ...movie,
            reviews: [...movie.reviews, newEntry],
          };
        }

        // otherwise return object as is
        return movie;
      });

      setMovies(updatedMovies);

      // Rest form
      newReview.value = "";
      newStar.value = "";
    }
  }

  return (
    <div className="review-form">
      <h3>Add your review</h3>
      <div className="mb-3">
        <label className="form-label">How many stars?</label>
        <input type="text" className="form-control w-25" id={`stars-${id}`} />
        <label className="form-label">Add a one-line review:</label>
        <input type="text" className="form-control" id={`review-${id}`} />
      </div>
      <button onClick={addReview} className="btn btn-primary">
        Submit
      </button>
    </div>
  );
}
