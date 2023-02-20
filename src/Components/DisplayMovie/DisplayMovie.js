import React from 'react';
import { useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../../Reducers/FavoriteSlice';

const DisplayMovie = ({ info, unFavorite, index }) => {
  const dispatch = useDispatch();

  return (
    <>
      {
        info.Title !== "" ? 
        <div className='movie-container'>
          <div className='movie-details'>
            <h3>{info.Title}</h3>
            <p>{info.Plot}</p>

            {info.Actors !== "" && <p><strong>Actors: </strong>{info.Actors}</p>}
            {info.imdbRating !== "" && <p><strong>Review: </strong>{info.imdbRating}</p>}

            {unFavorite ? <button onClick={() => dispatch(removeFavorite(index))}>Remove Favorite</button> : <button onClick={() => dispatch(addFavorite(info))}>Favorite</button>}

          </div>
          <img src={info.Poster} alt='' />
        </div> : 
        <div>
          Search a movie to display its informations
        </div>
      }
    </>
  );
};

export default DisplayMovie;