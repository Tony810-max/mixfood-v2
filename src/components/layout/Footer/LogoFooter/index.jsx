import React from 'react';
import logo from '../../../../assets/images/Logo/logo-mixfood.png';

export default function LogoFooter() {
  return (
    <div className="flex flex-col items-center flex-1">
      <div className="w-1/2 h-1/2">
        <img src={logo} alt="" className="w-full h-full" />
      </div>
      <span>Thai Restaurant Da Nang</span>
    </div>
  );
}
