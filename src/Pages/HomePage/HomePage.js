import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../Components/Header/Header';
import { addMovie } from '../../Reducers/MovieSlice';
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
  const dispatch = useDispatch();

  const changeTitle = (e) => {
    setTitle(e.target.value)
  }

  const search = async (e) => {
    e.preventDefault()
    const response = await searchByTitle(title)
    console.log(response)
    setResults(response.data)
    dispatch(addMovie(response.data))
  }

  const findIndex = () => {
    let i = favorites.findIndex(el => el.imdbID === results.imdbID);
    if(i === -1) 
      return false
    return i
  }
  console.log(findIndex())

  return (
    <>
      <Header />
      <div className='home-page'>
        <section className='title'>
          <h1>Movie Search</h1>
          <h2>Search about the movie of your choise and save your favorite ones</h2>
          <form className='search-bar' onSubmit={search}>
            <Input onInput={changeTitle} onChange={search} className='input-movie' placeholder='Insert name of movie' />
            <Button className='bt bt-blue-solid' type='submit'>Search</Button>
            <Button className='bt bt-blue-leaked' type='reset'>Reset</Button>
          </form>
        </section>
        <section className='results'>
          {
            results.Response === "True" ?
              <DisplayMovie
                info={results}
                unFavorite={false}
                index={findIndex()}
              /> :
              <p>Error type an valid movie name</p>
          }
        </section>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;