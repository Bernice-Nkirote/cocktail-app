import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import facts from '../data';

const Funfactlist = () => {
  const [index, setIndex] = React.useState(0);
  const { title, info } = facts[index];

  const checkNumber = (number) => {
    if (number > facts.length - 1) {
      return 0;
    }
    if (number < 0) {
      return facts.length - 1;
    }
    return number;
  };

  const nextFact = () => {
    setIndex(() => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevFact = () => {
    setIndex(() => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const randomFact = () => {
    let randomNumber = Math.floor(Math.random() * facts.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <article className='facts'>
      <h4 className='title'>{title}</h4>
      <p className='info'>{info}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevFact}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextFact}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomFact}>
        hit me
      </button>
    </article>
  );
};

export default Funfactlist;
