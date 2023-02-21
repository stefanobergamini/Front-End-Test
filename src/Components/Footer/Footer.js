import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss'

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div>
          <Link className='links' to='/'>Search</Link>
          <Link className='links' to='/Favorites'>Favorites</Link>
          <Link className='links' to='/About'>About</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;