import React from 'react';
import { navLinks } from '../constants';
import Button from './button';
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full flex py-6 justify-between items-left navbar bg-gray-800">
      <h2 className="flex justify-start ml-5 font-extrabold text-3xl text-blue-400">PLAYVISTA</h2>
      <ul className="flex justify-end items-center min-w-0">
        {navLinks.map((nav, index) => (
          <div key={nav.id} className="flex">
            <li
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white mx-4 hover:text-yellow-300`}
            >
              <Link to={`/${nav.id}`}>
                {nav.title}
              </Link>
            </li>
          </div>
        ))}
        <Button text="Login" className="font-black bg-orange-500 mx-4 px-4" />
      </ul>
    </div>
  );
}

export default Navbar;
