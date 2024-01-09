import React from 'react';
import OurSevice from '../../../../../components/OurSevice';
import { Martini, Soup, Truck } from 'lucide-react';

export default function ListServices() {
  return (
    <div className="px-2 grid md:grid-cols-2 xl:grid-cols-4 gap-8 py-12">
      <OurSevice
        Icon={Soup}
        number={50}
        color={'var(--primary-color)'}
        content={
          'We offer a variety of delicious and unique Thai dishes, providing an authentic Thai culinary experience.'
        }
      />
      <OurSevice
        Icon={Martini}
        number={50}
        color={'var(--primary-color)'}
        content={
          'We also have a wide selection of refreshing beverages to complement your meal, including traditional Thai drinks and exotic fruit juices.'
        }
      />
      <OurSevice
        Icon={Truck}
        number={50}
        color={'var(--primary-color)'}
        content={
          'With our efficient delivery service, you can enjoy your favorite Thai food from the comfort of your own home.'
        }
      />
      <OurSevice
        Icon={Martini}
        number={50}
        color={'var(--primary-color)'}
        content={
          'For those who prefer dining in, our friendly staff is dedicated to providing excellent service and creating a welcoming atmosphere for you to enjoy your meal.'
        }
      />
    </div>
  );
}
