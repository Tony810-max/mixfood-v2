/* eslint-disable import/no-unresolved */
import React from 'react';

import AboutContract from './AboutContract';
import AboutUs from './AboutUs';
import AboutSwiper from './AboutSwiper';

export default function AboutSection() {
  return (
    <div className="min-h-[100vh] container">
      <AboutContract />
      <AboutUs />
      <AboutSwiper />
    </div>
  );
}
