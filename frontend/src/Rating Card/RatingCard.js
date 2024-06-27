import { Star } from "@mui/icons-material";
import React from "react";
import "./RatingCard.css";
function RatingCard() {
  return (
    <div className="ratingCard">
      <h6>Buyer</h6>
      <span>
        <p className="ratingCard_rating">
          4.5 <Star />
        </p>
        <p className="ratingCard_verified"> Verified Buyer</p>
      </span>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
    </div>
  );
}

export default RatingCard;
