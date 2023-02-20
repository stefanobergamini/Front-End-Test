import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <img src='' alt='' />

      <Link to='/'>Search</Link>
      <Link to='/Favorites'>Favorites</Link>
    </div>
  );
};

export default Header;