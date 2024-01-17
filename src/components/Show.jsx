/* eslint-disable react/prop-types */
import React from 'react';

const Show = ({ when, children }) => {
  return <> {when && <>{children}</>}</>;
};

export default Show;
