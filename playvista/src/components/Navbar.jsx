import React from 'react';
import { navLinks } from '../constants';
import Button from './button';

function Navbar() {
  return (
    <div className="w-full flex py-6 justify-between items-left navbar bg-gray-800">
      <h2 className="logo">PLAYVISTA</h2>
      <ul className="flex justify-end items-center min-w-0">
        {navLinks.map((nav, index) => (
          <div key={nav.id} className="flex">
            <li
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white mx-4 hover:text-yellow-300`}
            >
              <a href={`#${nav.id}`}>
                {nav.title}
              </a>
            </li>
          </div>
        ))}
        <Button text="Login" className="font-black bg-orange-500 mx-4 px-4" />
      </ul>
    </div>
  );
}

export default Navbar;
