/* eslint-disable react/prop-types */
import React from 'react';
import SpecialitiesCard from '../../../../components/Card/SpecialitiesCard';
import { motion } from 'framer-motion';

const OurSpecialitiesList = ({ currentTab }) => {
  return (
    <div className="flex flex-col mt-7">
      {currentTab?.data?.map(itemp => (
        <motion.div
          key={itemp.id}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: itemp.id * 0.2,
            ease: 'linear',
          }}
        >
          <SpecialitiesCard
            order={itemp.id}
            image={itemp.image}
            name={itemp.name}
            desc={itemp.desc}
            price={itemp.price}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default OurSpecialitiesList;
