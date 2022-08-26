import React from 'react';
import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';
import About from './About';

const Home = () => {
  return (
    <main>
      <About />
      <SearchForm />
      <CocktailList />
    </main>
  );
};

export default Home;
