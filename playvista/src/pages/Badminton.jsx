import React from 'react';
import Navbar from '../components/Navbar';
import { turf } from '../constants';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function Badminton() {
  // Filter the turf array to get only items where sport === 'football'
  const footballTurfs = turf.filter(turfItem => turfItem.sport === 'badminton');

  return (
    <div className="bg-black">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-white text-3xl font-semibold mb-6">Badminton Courts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {footballTurfs.map((turfItem) => (
            <div key={turfItem.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              {/* Link to the BookingPage with the turfItem.id as a URL parameter */}
              <Link to={`/booking/${turfItem.id}`} className="block">
                <img src={turfItem.img} alt={turfItem.title} className="w-full h-64 object-cover" />
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-white mb-2">{turfItem.title}</h2>
                  <p className="text-gray-300">{turfItem.location}</p>
                  <a href={turfItem.maps} className="text-blue-500 hover:text-blue-400 mt-2 block">View on Map</a>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Badminton;
