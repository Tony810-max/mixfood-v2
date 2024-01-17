/* eslint-disable react/prop-types */
import React from 'react';
import DiningEventCard from '../../../../components/Card/DiningEventCard';

const DiningEventList = ({ currentTab }) => {
  return (
    <div className="flex flex-col items-center mt-12 h-full">
      {currentTab?.data?.map(itemp => (
        <DiningEventCard
          key={itemp.id}
          order={itemp.id}
          name={itemp.name}
          image={itemp.image}
          price={itemp.price}
          desc={itemp.desc}
        />
      ))}
    </div>
  );
};

export default DiningEventList;
