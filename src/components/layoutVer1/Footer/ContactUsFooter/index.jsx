import React from 'react';
import { Link } from 'react-router-dom';

import { Facebook, MessageCircle, Phone } from 'lucide-react';

export default function ContactUsFooter() {
  return (
    <div className="flex-1 flex flex-col items-center gap-3">
      <span className="text-xl font-Roboto-font font-bold">Contact Us</span>
      <div className="flex gap-3">
        <Link to={'https://www.facebook.com/mixfoodamthucthai'}>
          <Facebook size={30} />
        </Link>
        <Link to={'https://www.facebook.com/messages/t/661843517545518'}>
          <MessageCircle size={30} />
        </Link>
        <Link to={'+84905473728'}>
          <Phone size={30} />
        </Link>
      </div>
    </div>
  );
}
