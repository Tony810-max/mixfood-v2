import React from 'react';
import ButtonSignUp from '../../../components/ButtonSignUp';
import { Divider } from '@mui/material';

import logoGG from '../../../assets/images/SignUp/logoGG.webp';
import logoFB from '../../../assets/images/SignUp/logoFB.webp';
import logoApple from '../../../assets/images/SignUp/logoApple.webp';
import { Link } from 'react-router-dom';
import ROUTES from '../../../types/routes';

const SignUpSocialButton = () => {
  return (
    <div className="flex flex-col gap-12 mt-14">
      <div className="flex flex-col gap-6">
        <ButtonSignUp name="Continue with Google" logo={logoGG} />
        <ButtonSignUp name="Continue with Facebook" logo={logoFB} />
        <ButtonSignUp name="Continue with Apple" logo={logoApple} />
      </div>
      <Divider>OR</Divider>
      <Link to={ROUTES.LOGIN}>
        <ButtonSignUp name="Sign in with email" theme={'dark'} />
      </Link>
    </div>
  );
};

export default SignUpSocialButton;