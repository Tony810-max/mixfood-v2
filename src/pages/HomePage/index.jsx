/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

import Header from '../../components/layout/Header';
import BannerSection from './components/BannerSection';
import Sidebar from '../../components/layout/Sidebar';

import { AlignJustify } from 'lucide-react';

export default function HomePage() {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  console.log(toggleSidebar);
  return (
    <div
      className="relative flex flex-col min-h-[100vh] items-end lg:items-center"
      onClick={() => setToggleSidebar(!toggleSidebar)}
    >
      <div
        onClick={() => setToggleSidebar(!toggleSidebar)}
        className="absolute z-50 top-5 right-5 self-end visible lg:invisible"
      >
        <AlignJustify size={32} color="#fff" />
      </div>
      <Header />
      {toggleSidebar ? <Sidebar onToggle={setToggleSidebar} /> : ''}
      <BannerSection />
    </div>
  );
}
