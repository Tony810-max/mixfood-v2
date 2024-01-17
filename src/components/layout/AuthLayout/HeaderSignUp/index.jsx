import React from 'react';

import DropdownHeader from './DropdownHeader';

const SignUpHeader = () => {
  return (
    <div className="flex items-center justify-between px-10 py-4">
      <span className="w-10 h-10 rounded-full bg-gray-500" />
      <DropdownHeader />
    </div>
  );
};

export default SignUpHeader;
