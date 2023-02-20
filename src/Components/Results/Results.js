import React from 'react';
import { useSelector } from 'react-redux';

const Results = (props) => {
  const movie = useSelector((state) => state.movieReducer);

  console.log(movie)
  return (
    <div>
      {movie.Title}
      {movie.Year}
    </div>
  );
};

export default Results;