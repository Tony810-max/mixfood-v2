import React from 'react';

import { MapPin, Phone } from 'lucide-react';

const AboutFooter = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-5 mt-5">
      <div className="flex gap-3  ">
        <MapPin size={36} fill="#F5BE32" color="black" />
        <span className="text-[#D9D9D9] font-DM-Sans text-xl leading-normal max-w-[20rem]">
          Jendral Sudirman Street Pahoman Bandar Lampung, Lampung, 35222
        </span>
      </div>
      <div className="flex gap-3 ">
        <Phone
          size={36}
          fill="#F5BE32"
          color="text-[#D9D9D9] font-DM-Sans text-xl leading-normal max-w-[8rem]"
        />
        <span className="">Call us: +0721 471 285</span>
      </div>
    </div>
  );
};

export default AboutFooter;
