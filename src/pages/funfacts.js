import React from 'react';
import Funfactlist from './funfactlist';
import { GiMartini } from 'react-icons/gi';
const Funfacts = () => {
  return (
    <section className='main-facts'>
      <section className='container-facts'>
        <div className='title'>
          <h2>
            Fun Facts <GiMartini />
          </h2>
          <div className='underline'></div>
        </div>
        <Funfactlist />
      </section>
    </section>
  );
};

export default Funfacts;
