import React from 'react';

import SignUpHeader from '../../components/layout/AuthLayout/HeaderSignUp';
import imgSignUp from '../../assets/images/SignUp/imgSignUp.webp';

import SignUpTitle from './SignUpTitle';
import SignUpSocialButton from './SignUpSocialButton';
import SignUpNotice from './SignUpNotice';

const SignUpPage = () => {
  return (
    <div>
      <SignUpHeader />
      <div className="flex min-h-[calc(100vh-88px)]">
        <div className="flex flex-col px-36 py-[8.5rem]">
          <SignUpTitle />
          <SignUpSocialButton />
          <SignUpNotice />
        </div>
        <div className="min-h-full">
          <img src={imgSignUp} alt="" className="w-full h-full object-fill" />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
