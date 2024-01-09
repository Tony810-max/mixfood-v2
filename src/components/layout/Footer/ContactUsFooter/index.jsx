import React from 'react';
import { Link } from 'react-router-dom';

import { Facebook, MessageCircle, Phone } from 'lucide-react';

export default function ContactUsFooter() {
  return (
    <div className="flex-1">
      <span>Contact Us</span>
      <div className="flex gap-3">
        <Link to={'https://www.facebook.com/mixfoodamthucthai'}>
          <Facebook />
        </Link>
        <Link to={'https://www.facebook.com/messages/t/661843517545518'}>
          <MessageCircle />
        </Link>
        <Link to={'+84905473728'}>
          <Phone />
        </Link>
      </div>
    </div>
  );
}
