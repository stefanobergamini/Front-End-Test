import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../../Components/Header/Header';
import { searchByTitle } from '../../Services/apiCalls';

import { Input, Button } from '@ui5/webcomponents-react';

import './HomePage.scss'
import DisplayMovie from '../../Components/DisplayMovie/DisplayMovie';
import Footer from '../../Components/Footer/Footer';

const HomePage = () => {
  const favorites = useSelector((state) => state.favoriteReducer);
  const [title, setTitle] = useState("");
  const [results, setResults] = useState({
    Title: "",
    Year: "",
    Plot: "",
    Actors: "",
    Awards: "",
    Poster: "",
    imdbRating: "",
    imdbID: "",
    Response: "True"
  })

  const changeTitle = (e) => {
    setTitle(e.target.value)
  }

  // Created this function so that it is possible to submit with the enter key
  // Input from UI5 have the onChange property, 
  // but that also fires the search on the focusOut of the input bar, that is not wanted
  const handleKeyDown = (e) => {
    if(e.key === 'Enter') {
      search(e)
    }
  }

  const search = async (e) => {
    e.preventDefault()
    const response = await searchByTitle(title)
    setResults(response.data)
  }

  const findIndex = () => {
    let i = favorites.findIndex(el => el.imdbID === results.imdbID);
    if (i === -1)
      return false
    return i
  }

  const reset = () => {
    setResults(
      {
        Title: "",
        Year: "",
        Plot: "",
        Actors: "",
        Awards: "",
        Poster: "",
        imdbRating: "",
        imdbID: "",
        Response: "True"
      }
    )
    setTitle("")
  }

  return (
    <>
      <Header />
      <div className='home-page'>
        <section className='title'>
          <h1>IMDb Reviews</h1>
          <div className='search-field'>
            <h2>Search about the movie of your choice and save your favorite ones</h2>
            <form className='search-bar' onSubmit={search}>
              <Input value={title} onInput={changeTitle} className='input-movie' placeholder='Insert name of movie' onKeyDown={handleKeyDown}/>
              <Button className='bt bt-black-solid' onClick={search}>Search</Button>
              <Button className='bt bt-black-leaked' onClick={reset}>Reset</Button>
            </form>
          </div>
        </section>
        <section className='results'>
          {
            results.Response === "True" ?
              <DisplayMovie
                info={results}
                unFavorite={false}
                index={findIndex()}
              /> :
              <p>Error type a valid movie name</p>
          }
        </section>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;