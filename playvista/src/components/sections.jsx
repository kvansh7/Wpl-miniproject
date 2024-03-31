import React from 'react';
import { sec } from '../constants';
import { Link } from 'react-router-dom';

function Sections() {
  return (
    <div className="flex justify-center bg-gray-800 py-1 mx-1">
      <ul className="flex justify-end items-center min-w-0">
        {sec.map((section, index) => (
          <div key={section.id} className="flex">
            <li className={`font-poppins font-bold cursor-pointer hover:text-yellow-500 text-xl text-gray-200 mx-4 py-2 ${index !== 0 ? 'border-l-2 border-gray-500 pl-6' : ''}`}>
              <Link to={`/${section.id}`}>
                {section.title}
              </Link>
              <img src={section.img} className="flex justify-end w-[50px] h-[45px]" />
              <p className="text-gray-400 mt-0.5">{section.content}</p>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Sections;
