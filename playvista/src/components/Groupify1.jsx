
import React from 'react';
import { think1, create, build, discover } from '../assets';
import Button from './button';
import { Link } from 'react-router-dom';

function Groupify1() {
  return (
    <div className="flex flex-col">
      <h2 className="mt-10 ml-5 text-white font-sans text-4xl font-extrabold whitespace-nowrap overflow-visible">BUILD YOUR OWN SPORTS COMMUNITY</h2>
      <div className="mt-[75px] flex justify-center items-center">
        <img src={think1} className="w-[300px] h-auto ml-[465px]" />
        <div className="border-l-2 border-gray-500 pl-6">
          <p className="text-white font-extrabold font-poppins text-5xl pl-3">Don't know where to start your fitness journey from??</p>
        </div>
      </div>

      <div className="mt-[75px] flex justify-center items-center">
      <div className="border-r-2 border-gray-500 pl-6">
      <p className="text-white font-extrabold font-poppins text-5xl pr-3">Discover & Join different sports groups or create your own public or private group</p>
    </div>
      <img src={discover} className="w-[400px] h-auto mr-[350px]" />
    </div>

    <div className="mt-[75px] flex justify-center items-center">
    <img src={create} className="w-[275px] h-auto ml-[500px]" />
    <div className="border-l-2 border-gray-500 pl-6">
      <p className="text-white font-extrabold font-poppins text-5xl pl-3">create or join a game near you</p>
    </div>
  </div>

  <div className="mt-[75px] flex justify-center items-center mb-20">
      <div className="border-r-2 border-gray-500 pl-6">
      <p className="text-white font-extrabold font-poppins text-5xl pr-3">Step on the field and build your very own sports community</p>
    </div>
      <img src={build} className="w-[400px] h-auto mr-[350px]" />
    </div>
    <div className='flex justify-center'>
    <Link to="/Groupify">
      <Button text= "GROUPIFY NOW"className="font-black bg-orange-500 m-5 p-2 h-[50px] w-[150px] hover:bg-green-200">
      </Button>
    </Link>
    </div>
    
    </div>
  );
}

export default Groupify1;