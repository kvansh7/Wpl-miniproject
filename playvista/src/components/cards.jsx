import React from 'react';
import { turf } from '../constants';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Cards() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        className: "slick-slider-custom", 
        centerMode: true,
        centerPadding: "1", 
    };

    return (
        <div className="mt-10 overflow-hidden">
            <Slider {...settings}>
                {turf.map((d) => (
                    <div key={d.id} className="px-2">
                        <div className="w-full bg-gray-100 rounded-lg shadow-lg overflow-hidden border border-gray-300">
                            <a href={`#${d.id}`} className="block">
                                <img src={d.img} alt="" className="w-full h-48 object-cover" />
                            </a>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold mb-2">
                                    <a href={`#${d.id}`} className="text-gray-800 hover:text-blue-500">{d.title}</a>
                                </h3>
                                <p className="text-sm text-gray-600">
                                    <a href={d.maps} className="hover:text-blue-500">{d.location}</a>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Cards;
