import React, { useEffect, useState } from "react";
import FilterGroup from "./FilterGroup";
import _ from "lodash";

import "./MovieList.css";
// import Fire from "../../assets/fire.png";
import MovieCard from "./MovieCard";

const MovieList = ({type, title}) => {
  const [movies, setMovies] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [sort, setSort] = useState({
    by: "default",
    order: "asc",
  });

  useEffect(() => {
    fetchMovies();
  }, [type]);

  useEffect(() => {
    if (sort.by !== "default") {
      const sortedMovies = _.orderBy(filteredMovies, [sort.by], [sort.order]);
      console.log("H", sort);

      setFilteredMovies(sortedMovies);
    }

  }, [sort ]);

  const handleSort = (e) => {
    setSort((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const fetchMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${type}?api_key=678826087b283705293d26c107eaccb1`
    );
    const data = await response.json();
    setMovies(data.results);
    setFilteredMovies(data.results);
  };

  const handleFilter = (rating) => {
    if (rating !== minRating) {
      setMinRating(rating);
      const filtered = movies.filter((movie) => movie.vote_average >= rating);
      setFilteredMovies(filtered);
    } else {
      setMinRating(0);
      setFilteredMovies(movies);
    }
    console.log(sort)
  };

  return (
    <section className="movie_list" id={type}>
      <header className="align_center movie_list_header">
        <h2 className="align_center movie_list_heading">{title} </h2>

        <div className="align_center movie_list_fs">
          <FilterGroup onRatingClick={handleFilter} minRating={minRating} />
          <select
            name="by"
            id=""
            className="movie_sorting"
            onChange={handleSort}
            value={sort.by}
          >
            <option value="default">SortBy</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>
          <select
            name="order"
            id=""
            className="movie_sorting"
            onChange={handleSort}
            value={sort.order}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </header>

      <div className="movie_cards">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
