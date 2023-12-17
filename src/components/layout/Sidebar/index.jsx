/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { XCircle } from 'lucide-react';

import logo from '../../../assets/images/Logo/logo-mixfood.png';

export default function Sidebar({ onToggle }) {
  return (
    <div className="absolute z-[999] right-0 flex flex-col bg-[#3e3f3d] h-full py-6 px-4 gap-6 lg:invisible visible">
      <Link
        to={'/'}
        className="flex flex-col justify-center text-center gap-2 no-underline"
      >
        <img alt="" src={logo} className="w-[250px] lg:w-[300px]" />
        <span className="text-[var(--white-color)] italic text-sm w-full">
          THAI RESTAURANT DA NANG
        </span>
      </Link>
      <div>
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
    </div>
  );
}
