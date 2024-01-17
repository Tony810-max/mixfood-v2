/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const LinkComponent = ({ to, children }) => (
  <Link to={to} className="underline">
    {children}
  </Link>
);

const SignUpNotice = () => (
  <span className="text-black text-center font-poppins-font text-sm font-normal mt-2">
    By signing up, you agree to the{' '}
    <LinkComponent to="/">Terms of Service</LinkComponent>
    {` and `}
    <LinkComponent to="/">Privacy Policy</LinkComponent>
    {`, including `}
    <LinkComponent to="/">cookie use</LinkComponent>.
  </span>
);

export default SignUpNotice;
