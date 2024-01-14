import React, { useState } from 'react';

import BannerSection from './components/BannerSection';
import SpecialMenuSection from './components/SpecialMenuSection';

import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import LuxurySection from './components/LuxurySection';
import OurSpecialitiesSection from './components/OurSpecialitiesSection';
import DiningEventSection from './components/DiningEventSection';
import SalmonSection from './components/SalmonSection';
import OurStorySection from './components/OurStorySection';
import Footer from '../../components/layout/Footer';

import logo from '../../assets/images/logo.webp';

import { AlignJustify } from 'lucide-react';

const HomePage = () => {
  const [toggleSideBar, setToggleSideBar] = useState(false);
  return (
    <div className="w-full ">
      <div className="fixed  md:hidden flex items-center justify-between w-full p-5 backdrop-blur  z-[9999999]">
        <div className="w-20 h-20">
          <img src={logo} alt="logo" className="w-full h-full" />
        </div>
        <AlignJustify
          size={32}
          color="#F5BE32"
          className=" "
          onClick={() => setToggleSideBar(!toggleSideBar)}
        />
      </div>
      {toggleSideBar && <Sidebar check={setToggleSideBar} />}
      <Header />
      <BannerSection />
      <SpecialMenuSection />
      <LuxurySection />
      <OurSpecialitiesSection />
      <DiningEventSection />
      <SalmonSection />
      <OurStorySection />
      <Footer />
    </div>
  );
};

export default HomePage;
