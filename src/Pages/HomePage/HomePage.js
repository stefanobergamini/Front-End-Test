import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Results from '../../Components/Results/Results';
import { addMovie } from '../../Reducers/MovieSlice';
import { searchByTitle } from '../../Services/apiCalls';
import './HomePage.scss'

const HomePage = () => {
  // const movie = useSelector((state) => state.movieReducer);
  const [title, setTitle] = useState("");
  const [results, setResults] = useState("")
  const dispatch = useDispatch();

  const changeTitle = (e) => {
    setTitle(e.target.value)
  }

  const search = async () => {
    const response = await searchByTitle(title)
    console.log(response)
    setResults(response.data)
    dispatch(addMovie(response.data))
  }

  return (
    <>
      <section className='title'>
        <h1>Movie Search</h1>
        <h2>Search about the movie of your choise and save your favorite ones</h2>
        <div className='search-bar'>
          <input onChange={changeTitle}></input>
          <button onClick={search}>Searct</button>
          <button>Reset</button>
        </div>
      </section>
      <section className='results'>
        <Results 
          title={results !== "" && results.Title}
          year={results !== "" && results.Year}
        />
      </section>
    </>
  );
};

export default HomePage;