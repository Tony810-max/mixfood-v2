import React from 'react';

import { Link } from 'react-router-dom';

import logo from '../../../../assets/images/HomePage/logo.webp';

const ContactFooter = () => {
  return (
    <div className="mt-[6rem] flex flex-col items-center gap-8">
      <img src={logo} alt="" className="" />
      <div className="flex gap-6">
        <Link
          to={'/'}
          className="text-white text-center font-cormorant-serif text-xl font-semibold leading-normal hover:opacity-70 "
        >
          Instagram
        </Link>
        <Link
          to={'/'}
          className="text-white text-center font-cormorant-serif text-xl font-semibold leading-normal hover:opacity-70"
        >
          Twitter
        </Link>
        <Link
          to={'/'}
          className="text-white text-center font-cormorant-serif text-xl font-semibold leading-normal hover:opacity-70"
        >
          Facebook
        </Link>
      </div>
    </div>
  );
};

export default ContactFooter;
