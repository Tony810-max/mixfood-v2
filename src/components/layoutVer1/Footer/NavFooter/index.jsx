import React from 'react';
import { Link } from 'react-router-dom';

export default function NavFooter() {
  return (
    <div className="flex flex-col items-center flex-1 gap-3">
      <Link to={'/'}>
        {' '}
        <span className="font-Roboto-font font-semibold text-xl hover:text-[--primary-color]">
          HOME
        </span>
      </Link>
      <Link to={'/'}>
        {' '}
        <span className="font-Roboto-font font-semibold text-xl hover:text-[--primary-color]">
          ABOUT US
        </span>
      </Link>
      <Link to={'/'}>
        {' '}
        <span className="font-Roboto-font font-semibold text-xl hover:text-[--primary-color]">
          MENU
        </span>
      </Link>
      <Link to={'/'}>
        {' '}
        <span className="font-Roboto-font font-semibold text-xl hover:text-[--primary-color]">
          CONTACT
        </span>
      </Link>
    </div>
  );
}
