import React from "react";
import Review from "./Review";

export default function ReviewList({ reviews }) {
  return (
    <div>
      {reviews?.map((rev, i) => {
        return <Review key={i} stars={rev.stars} review={rev.review} />;
      })}
    </div>
  );
}
