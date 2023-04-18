import React from 'react';
import { animationValues } from './Header.utils';

type Props = {};

const Header = (props: Props) => {
  return (
    <header className='sticky top-0 z-20 max-w-7xl mx-auto flex items-start justify-between p-5 xl:items-center'>
      <div className='flex flex-row items-center'>
        <h1>Header</h1>
      </div>
    </header>
  );
};

export default Header;
