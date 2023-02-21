import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../Reducers/FavoriteSlice';
import smiley from '../../Assets/Images/Smiley.svg'
import heart from '../../Assets/Images/Heart.svg'
import filledHeart from '../../Assets/Images/FilledHeart.svg'
import './DisplayMovie.scss'
import { Button } from '@ui5/webcomponents-react';

const DisplayMovie = ({ info, index }) => {
  const favorites = useSelector((state) => state.favoriteReducer);
  const dispatch = useDispatch();
  
  const inFavorites = () =>{
    let i = favorites.findIndex(el => el.imdbID === info.imdbID);
    if(i === -1) 
      return false
    return true
  }
  
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
                inFavorites() ?
                  <Button className='bt bt-remove-favorite' onClick={() => dispatch(removeFavorite(index))}>unFavorite <img src={filledHeart} alt=''/></Button> :
                  <Button className='bt bt-black-leaked' onClick={() => dispatch(addFavorite(info))}>Favorite <img src={heart} alt=''/></Button>
              }

            </div>
            <div>
              <img src={info.Poster} alt='' />
            </div>
          </div> :
          <div className='no-search'>
            <p>Search a movie to display it's informations</p>
            <img src={smiley} alt=';)' />
          </div>
      }
    </>
  );
};

export default DisplayMovie;