import React from "react";

const FilterGroup = ({ onRatingClick, minRating }) => {
  const ratings = [9, 8, 7, 6,5];
  return (
    <ul className="align_center movie_filter">
      {ratings.map((rating) => (
        <li
          onClick={() => onRatingClick(rating)}
          className={
            minRating === rating
              ? "movie_filter_item active"
              : "movie_filter_item "
          }
          key={rating}
        >
          {rating}+ Star
        </li>
      ))}
    </ul>
  );
};

export default FilterGroup;
