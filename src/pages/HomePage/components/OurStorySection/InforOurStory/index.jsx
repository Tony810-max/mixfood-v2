import React from 'react';

import chef1 from '../../../../../assets/images/HomePage/chef1.webp';
import chef2 from '../../../../../assets/images/HomePage/chef2.webp';
import chef4 from '../../../../../assets/images/HomePage/chef4.webp';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const InforOurStory = () => {
  return (
    <div className="mt-12 flex gap-12 items-center">
      <div className="flex-1 flex">
        <img src={chef4} alt="" className="flex-1" />
        <div className="flex flex-col flex-1">
          <img src={chef1} alt="" className="flex-1" />
          <img src={chef2} alt="" className="flex-1" />
        </div>
      </div>
      <div className="flex-1 flex flex-col">
        <span className="text-[#D9D9D9] font-DM-Sans text-xl whitespace-pre-line">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          feugiat urna id leo euismod rhoncus. Aliquam erat volutpat. Nulla id
          aliquam neque, at dignissim quam. Praesent et lacus accumsan,
          consequat nisl a, mattis sapien. Nam sodales ullamcorper aliquet.
          Phasellus ut pretium libero, vitae imperdiet purus. Sed sed tincidunt
          velit. Aliquam vitae ipsum molestie, vehicula nisi quis, finibus leo
        </span>
        <Link to={'/'} className="mt-12">
          <Button className="border-2 border-solid border-[#F5BE32] py-3 px-4 text-[#F5BE32] font-cormorant-serif text-xl font-semibold uppercase shadow-button-shadow hover:opacity-70">
            More about us
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default InforOurStory;