import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite } from '../../Reducers/FavoriteSlice';

const Results = () => {
  const movie = useSelector((state) => state.movieReducer);
  const favorites = useSelector((state) => state.favoriteReducer);
  const dispatch = useDispatch();

  const addmovieFav = () => {
    console.log(movie)
    dispatch(addFavorite(movie))
  }

  console.log(favorites)
  return (
    <>
      {
        movie.Title !== "" ? 
        <div className='movie-container'>
          <div className='movie-details'>
            <h3>{movie.Title}</h3>
            <p>{movie.Plot}</p>

            {movie.Actors !== "" && <p><strong>Actors: </strong>{movie.Actors}</p>}
            {movie.imdbRating !== "" && <p><strong>Review: </strong>{movie.imdbRating}</p>}

            <button onClick={() => addmovieFav()}>Favorite</button>

          </div>
          <img src={movie.Poster} alt='' />
        </div> : 
        <div>
          Search a movie to display its informations
        </div>
      }
    </>
  );
};

export default Results;