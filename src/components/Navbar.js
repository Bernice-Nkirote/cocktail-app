import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <span className='logo'>
          <Link to='/'>
            <h2>Cocktail Ber</h2>
          </Link>
        </span>
        <ul className='nav-links'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='funfacts'>FunFacts</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
