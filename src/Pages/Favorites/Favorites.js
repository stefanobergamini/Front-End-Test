import React from 'react';
import { useSelector } from 'react-redux';
import DisplayMovie from '../../Components/DisplayMovie/DisplayMovie';
import Header from '../../Components/Header/Header';

const Favorites = () => {
  const favorites = useSelector((state) => state.favoriteReducer);
  console.log(favorites)

  var listFavorites = favorites.map(function (element, index) {
    return (
      <DisplayMovie
        info={element}
        key={index}
        index={index}
        unFavorite={true}
      />
    )
  })

  return (
    <div>
      <Header />
      OLA por agora
      {
        favorites.length !== 0 ? listFavorites :
        <p>Add yout favorites films to see them here</p>
      }
    </div>
  );
};

export default Favorites;