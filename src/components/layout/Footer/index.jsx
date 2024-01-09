import React from 'react';

import ContactUsFooter from './ContactUsFooter';
import LogoFooter from './LogoFooter';
import NavFooter from './NavFooter';
import FeedBackFooter from './FeedBackFooter';

export default function Footer() {
  return (
    <div className="container flex flex-col lg:flex-row justify-around items-center gap-8">
      <ContactUsFooter />
      <LogoFooter />
      <NavFooter />
      <FeedBackFooter />
    </div>
  );
}
