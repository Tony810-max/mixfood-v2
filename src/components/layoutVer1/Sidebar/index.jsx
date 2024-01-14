/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { XCircle } from 'lucide-react';

export default function Sidebar({ onToggle }) {
  return (
    <div className="absolute z-[999] right-0 flex lg:hidden flex-col bg-[#3e3f3d] h-full py-6 px-4 gap-6">
      <div
        onClick={() => onToggle(prev => !prev)}
        className="self-end hover:opacity-60 cursor-pointer"
      >
        <XCircle size={32} color="#fff" />
      </div>
      <Link
        to={'#'}
        className="px-12 hover:opacity-60 no-underline text-[#fff] text-2xl font-light"
      >
        HOME
      </Link>
      <Link
        to={'#'}
        className="px-12 hover:opacity-60 no-underline text-[#fff] text-2xl font-light"
      >
        ABOUT US
      </Link>
      <Link
        to={'#'}
        className="px-12 hover:opacity-60 no-underline text-[#fff] text-2xl font-light"
      >
        MENU
      </Link>
      <Link
        to={'#'}
        className="px-12 hover:opacity-60 no-underline text-[#fff] text-2xl font-light"
      >
        SHOP
      </Link>
      <Link
        to={'#'}
        className="px-12 hover:opacity-60 no-underline text-[#fff] text-2xl font-light"
      >
        CONTACT
      </Link>
    </div>
  );
}
