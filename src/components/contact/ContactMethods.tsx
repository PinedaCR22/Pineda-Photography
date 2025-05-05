// components/contact/ContactMethods.tsx
import React from 'react';
import {
  FaWhatsapp,
  FaEnvelope,
  FaFacebook,
  FaInstagram
} from 'react-icons/fa';

const ContactMethods: React.FC = () => (
  <div className="flex flex-col items-center space-y-4">
    <a
      href="https://wa.me/50685042171"
      className="flex items-center space-x-2 text-gray-900 hover:text-green-600 transition"
    >
      <FaWhatsapp size={24} />
      <span className="text-lg font-medium">(506) 8504-2171</span>
    </a>

    <a
      href="mailto:emmapr2233@gmail.com"
      className="flex items-center space-x-2 text-gray-900 hover:text-red-600 transition"
    >
      <FaEnvelope size={24} />
      <span className="text-lg font-medium">emmapr2233@gmail.com</span>
    </a>

    <a
      href="https://www.facebook.com/share/14zJZTcE3H/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 text-gray-900 hover:text-blue-600 transition"
    >
      <FaFacebook size={24} />
      <span className="text-lg font-medium">Pineda Photography</span>
    </a>

    <a
      href="https://instagram.com/pineda_photography_cr"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 text-gray-900 hover:text-pink-600 transition"
    >
      <FaInstagram size={24} />
      <span className="text-lg font-medium">pineda_photography_cr</span>
    </a>
  </div>
);

export default ContactMethods;
