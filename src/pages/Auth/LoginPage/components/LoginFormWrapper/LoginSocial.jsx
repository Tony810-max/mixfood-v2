/* eslint-disable prettier/prettier */
import React from 'react';
import ButtonSignUp from '../../../../../components/ButtonSignUp';

import logoGG from '../../../../../assets/images/SignUp/logoGG.webp';
import logoApple from '../../../../../assets/images/SignUp/logoApple.webp';
const LoginSocial = () => {
    return (
        <div className='flex flex-col gap-4'>
            <ButtonSignUp name="Continue with Google" logo={logoGG} />
            <ButtonSignUp name="Continue with Apple" logo={logoApple} />
        </div>
    )
};

export default LoginSocial;
