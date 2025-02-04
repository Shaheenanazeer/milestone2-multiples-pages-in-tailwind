import Link from 'next/link';
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-black p-4">
      <h1 className="text-white text-xl font-bold">Car</h1>
      <nav className="flex items-center space-x-4">
        <Link href="/" className="text-white hover:text-gray-400">
          Home
        </Link>
        <Link href="/about" className="text-white hover:text-gray-400">
          About
        </Link>
        <Link href="/cars" className="text-white hover:text-gray-400">
          Cars
        </Link>
        <Link href="/contact" className="text-white hover:text-gray-400">
          Contact
        </Link>
        <FaShoppingCart className="text-white text-2xl" />
      </nav>
    </header>
  );
};

export default Header;
