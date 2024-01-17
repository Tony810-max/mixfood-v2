import React, { useEffect, useState } from 'react';

import logo from '../../../assets/images/logo.webp';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

import ROUTES from '../../../types/routes';

import Show from '../../Show';

const Header = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = sessionStorage.getItem('user');
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
  }, []);

  const handleLogOut = () => {
    if (currentUser) {
      alert("You've been logged out");
      sessionStorage.removeItem('user');
      setCurrentUser(null);
    }
  };

  return (
    <div className="md:flex fixed hidden justify-around items-center top-3 left-0 right-0 backdrop-blur z-[9999] ">
      <div className="w-20 h-20">
        <img src={logo} alt="logo" className="w-full h-full" />
      </div>
      <div className=" flex gap-8 ">
        <Link
          to={'/'}
          className="font-cormorant-serif text-xl font-normal leading-normal text-white hover:opacity-70"
        >
          Menu
        </Link>
        <Link
          to={'/'}
          className="font-cormorant-serif text-xl font-normal leading-normal text-white hover:opacity-70"
        >
          Fine Dining
        </Link>
        <Link
          to={'/'}
          className="font-cormorant-serif text-xl font-normal leading-normal text-white hover:opacity-70"
        >
          About
        </Link>
        <Link
          to={'/'}
          className="font-cormorant-serif text-xl font-normal leading-normal text-white hover:opacity-70"
        >
          Contact
        </Link>
      </div>
      <Show when={!currentUser}>
        <Link to={ROUTES.PRE_LOGIN}>
          <Button
            variant="outlined"
            className="rounded-none text-center text-xl uppercase border-2 border-[#F5BE32] font-semibold font-cormorant-serif text-[#F5BE32] hover:opacity-70"
          >
            Reservation
          </Button>
        </Link>
      </Show>
      <Show when={!!currentUser}>
        <div className="flex gap-4 items-center">
          <span className="text-2xl text-white">
            Hello {currentUser?.username}
          </span>
          <Button
            onClick={handleLogOut}
            variant="outlined"
            className="rounded-none text-center text-xl uppercase border-2 border-[#F5BE32] font-semibold font-cormorant-serif text-[#F5BE32] hover:opacity-70"
          >
            Log out
          </Button>
        </div>
      </Show>
    </div>
  );
};

export default Header;
