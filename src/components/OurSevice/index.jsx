/* eslint-disable react/prop-types */

import React from 'react';

export default function OurSevice({ Icon, content, number, Color }) {
  return (
    <div className="text-center">
      <Icon size={number} color={Color} className="m-auto" />
      <span className="  text-xl font-Roboto-font py-2">{content}</span>
    </div>
  );
}
