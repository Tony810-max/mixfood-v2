/* eslint-disable react/prop-types */

import React from 'react';

export default function OurSevice({ Icon, content, number, color }) {
  return (
    <div className=" flex flex-col items-center gap-8 border border-[#000] rounded-xl p-8">
      <Icon size={number} color={color} />
      <span className="text-xl font-Roboto-font text-center whitespace-normal">
        {content}
      </span>
    </div>
  );
}
