import React from 'react';

import HeadingOurStory from './HeadingOurStory';
import InforOurStory from './InforOurStory';

const OurStorySection = () => {
  return (
    <div className="min-h-screen bg-[#1E1E1E] flex justify-center">
      <div className="container">
        <HeadingOurStory />
        <InforOurStory />
      </div>
    </div>
  );
};

export default OurStorySection;
