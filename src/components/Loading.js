import React from 'react';
import { GiMartini } from 'react-icons/gi';

const Loading = () => {
  return (
    <div className='loader'>
      <span>
        <GiMartini />
      </span>
      <span>
        <GiMartini />
      </span>
      <span>
        <GiMartini />
      </span>
    </div>
  );
};

export default Loading;
