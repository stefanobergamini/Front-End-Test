import React from 'react';
import { useSelector } from 'react-redux';
import DisplayMovie from '../../Components/DisplayMovie/DisplayMovie';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import smiley from '../../Assets/Images/Smiley.svg'
import './Favorites.scss'

const Favorites = () => {
  const favorites = useSelector((state) => state.favoriteReducer);
  
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
        <h1>Welcome to your favorites movies page</h1>
        {
          favorites.length !== 0 ? listFavorites :
            <div className='no-favorites'>
              <img src={smiley} alt=';)' />

              <p>Add your favorites films to see them here</p>
            </div>
        }
      </div>
      <Footer />
    </>
  );
};

export default Favorites;