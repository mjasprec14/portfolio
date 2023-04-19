import React from 'react';
import { NAV_ITEMS } from './Navbar.utils';
import Link from 'next/link';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className='absolute right-5 top-[40%] '>
      <nav className='flex flex-col space-y-5'>
        {NAV_ITEMS?.map((navItem, idx) => {
          const Icon = navItem.icon;
          return (
            <Link
              key={idx}
              href={`/#${navItem.section}`}
              className='text-[#808080] text-xl'
            >
              <Icon />
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Navbar;
