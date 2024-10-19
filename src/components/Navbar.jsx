// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import {
  MagnifyingGlassIcon,
  UserIcon,
  ShoppingCartIcon,
  Bars3Icon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-brown-primary to-brown-secondary h-20 flex justify-between items-center py-5 font-medium px-10 md:sticky top-0 z-10">
      <h1 className="text-white">LOGO</h1>
      <ul className="hidden sm:flex gap-5 text-base text-white font-lato tracking-wider">
        <NavLink to="/" className="flex flex-col items-center gap-1 group">
          <p>HOME</p>
          <hr className="w-3/4 border-none h-[1.6px] bg-white hidden group-hover:block" />
        </NavLink>
        <NavLink
          to="/collection"
          className="flex flex-col items-center gap-1 group"
        >
          <p>COLLECTION</p>
          <hr className="w-3/4 border-none h-[1.6px] bg-white hidden group-hover:block" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1 group">
          <p>ABOUT</p>
          <hr className="w-3/4 border-none h-[1.6px] bg-white hidden group-hover:block" />
        </NavLink>
        <NavLink
          to="/contact"
          className="flex flex-col items-center gap-1 group"
        >
          <p>CONTACT</p>
          <hr className="w-3/4 border-none h-[1.6px] bg-white hidden group-hover:block" />
        </NavLink>
      </ul>

      {/* Icons Section */}
      <div className="flex items-center space-x-4 text-white">
        <MagnifyingGlassIcon className="h-6 w-6 cursor-pointer" />
        <div className="group relative">
          <UserIcon className="h-6 w-6 cursor-pointer" />
          <div className="group-hover:block hidden absolute right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <ShoppingCartIcon className="h-6 w-6 cursor-pointer" />
          <p className="absolute right-[-5px] bottom-[-3px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[10px]">
            10
          </p>
        </Link>
        <div className="w-5 cursor-pointer sm:hidden">
          <Bars3Icon
            onClick={() => setVisible(!visible)}
            className="h-6 w-6 text-white"
          />
        </div>
      </div>

      {/* Sidebar menu for small screens */}
      <div
        className={`absolute top-0 right-0 overflow-hidden bg-brown-primary transition-all duration-300 ${
          visible ? 'w-3/4 h-3/4' : 'w-0 h-0'
        }`}
      >
        <div className="flex flex-col items-center text-white h-full justify-center space-y-6">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 text-white cursor-pointer"
          >
            <ChevronDownIcon className="h-5 w-5 rotate-90" />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 px-6 text-lg hover:bg-white hover:text-brown-primary transition duration-300 rounded-md"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 px-6 text-lg hover:bg-white hover:text-brown-primary transition duration-300 rounded-md"
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 px-6 text-lg hover:bg-white hover:text-brown-primary transition duration-300 rounded-md"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 px-6 text-lg hover:bg-white hover:text-brown-primary transition duration-300 rounded-md"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
