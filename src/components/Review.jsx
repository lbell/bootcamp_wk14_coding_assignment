import React from "react";
import Stars from "./Stars";

export default function Review({ stars, review }) {
  return (
    <div className="review">
      <Stars stars={stars} />
      {review}
    </div>
  );
}
