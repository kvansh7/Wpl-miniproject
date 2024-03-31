import React from 'react';

function Footer() {
  return (
    <div className="bg-gray-800 w-full py-4 px-6 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <ul className="flex flex-wrap justify-end items-center gap-x-6">
          <li>Contact</li>
          <li>Location</li>
          <li>Groupify</li>
        </ul>
        <p className="text-sm">&copy; {new Date().getFullYear()} PLAYVISTA. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
