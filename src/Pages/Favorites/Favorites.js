import React from 'react';
import { useSelector } from 'react-redux';
import DisplayMovie from '../../Components/DisplayMovie/DisplayMovie';
import Header from '../../Components/Header/Header';
import './Favorites.scss'

const Favorites = () => {
  const favorites = useSelector((state) => state.favoriteReducer);
  console.log(favorites)

  var listFavorites = favorites.map(function (element, index) {
    return (
      <div className='movie-repeat'>
        <DisplayMovie
          info={element}
          key={index}
          index={index}
          unFavorite={true}
        />
      </div>
    )
  })

  return (
    <>
      <Header />
      <div className='favorites'>
        {
          favorites.length !== 0 ? listFavorites :
            <p>Add yout favorites films to see them here</p>
        }
      </div>
    </>
  );
};

export default Favorites;