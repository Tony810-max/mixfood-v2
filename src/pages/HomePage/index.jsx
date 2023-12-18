/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { AlignJustify } from 'lucide-react';

// components
import Header from '../../components/layout/Header';
import BannerSection from './components/BannerSection';
import Sidebar from '../../components/layout/Sidebar';

// sections
import AboutSection from './components/AboutSection';
import BookSection from './components/BookSection';

export default function HomePage() {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <div className="relative flex flex-col min-h-[100vh] items-end lg:items-center">
      <div
        onClick={() => setToggleSidebar(!toggleSidebar)}
        className="absolute z-50 top-24 right-10 self-end visible lg:invisible"
      >
        <AlignJustify size={32} color="#fff" />
      </div>
      <Header />
      {toggleSidebar ? <Sidebar onToggle={setToggleSidebar} /> : ''}
      <BannerSection />
      <AboutSection />
      <BookSection />
    </div>
  );
}
