import React from 'react';
import { Link } from 'react-router-dom';
import { turf } from '../constants'; 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Cards() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="mt-10">
      <Slider {...settings}>
        {turf.map((d) => (
          <div key={d.id} className="px-2">
            <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden border border-gray-300">
              <Link to={`/booking/${d.id}`} className="block"> {/* Link to the booking page */}
                <img src={d.img} alt="" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">
                    {d.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {d.location}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Cards;
