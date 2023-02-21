import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../Reducers/FavoriteSlice';
import smiley from '../../Assets/Images/Smiley.svg'
import heart from '../../Assets/Images/Heart.svg'
import filledHeart from '../../Assets/Images/FilledHeart.svg'
import starEmpty from '../../Assets/Images/StarEmpty.svg'
import starFilled from '../../Assets/Images/StarFilled.svg'
import starHalf from '../../Assets/Images/StarHalf.svg'
import './DisplayMovie.scss'
import { Button } from '@ui5/webcomponents-react';

const DisplayMovie = ({ info, index }) => {
  const favorites = useSelector((state) => state.favoriteReducer);
  const dispatch = useDispatch();

  const getStars = (rating) => {

    // Round to nearest half
    rating = Math.round(rating) / 2;
    let output = [];
  
    // Append all the filled whole stars
    for (var i = rating; i >= 1; i--)
      output.push(<img src={starFilled} alt='' />);
  
    // If there is a half a star, append it
    if (i === .5) output.push(<img src={starHalf} alt='' />);
  
    // Fill the empty stars
    for (let i = (5 - rating); i >= 1; i--)
      output.push(<img src={starEmpty} alt='' />);
  
    return output;
  
  }
  
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

              <p><strong>Actors: </strong>{info.Actors}</p>
              <div className='review'><strong>Review: </strong>{getStars(info.imdbRating)}</div>

              {
                inFavorites() ?
                  <Button className='bt bt-remove-favorite' onClick={() => dispatch(removeFavorite(index))}>Favorite <img src={filledHeart} alt=''/></Button> :
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