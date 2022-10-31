import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as starSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as starOutline } from "@fortawesome/free-regular-svg-icons";

export default function Stars({ stars }) {
  if (stars) {
    let emptyStars = 5 - stars;
    /**
     * The following uses an elegant trick I just learned that I'm madlyi in love with:
     *
     * React likes mapping over an object, so to loop through and create X number of
     * components on the fly, we can creat an empty array of x length then
     * destructure it into another array [..Array(x)] and map over that.
     *
     * This effectively does the thing we want X times.
     **/
    return (
      <div className="star-rating">
        {[...Array(stars)].map((empty, i) => (
          <FontAwesomeIcon key={i} icon={starSolid} style={{ color: "gold" }} />
        ))}
        {[...Array(emptyStars)].map((empty, i) => (
          <FontAwesomeIcon
            key={i}
            icon={starOutline}
            style={{ color: "gold" }}
          />
        ))}
      </div>
    );
  }
}
