import React from 'react';
import { useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../../Reducers/FavoriteSlice';
import smiley from '../../Assets/Images/Smiley.svg'
import './DisplayMovie.scss'
import { Button } from '@ui5/webcomponents-react';

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

              {
                unFavorite ?
                  <Button className='bt bt-blue-solid' onClick={() => dispatch(removeFavorite(index))}>Remove Favorite</Button> :
                  <Button className='bt bt-blue-solid' onClick={() => dispatch(addFavorite(info))}>Favorite</Button>
              }

            </div>
            <div>
              <img src={info.Poster} alt='' />
            </div>
          </div> :
          <div className='no-search'>
            <p>Search a movie to display its informations</p>
            <img src={smiley} alt=';)' />
          </div>
      }
    </>
  );
};

export default DisplayMovie;