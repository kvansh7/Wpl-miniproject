import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { meetpals,diff,compete } from '../assets';
import Button from '../components/button';
import { Link } from 'react-router-dom';
import Cards from '../components/Cards';

function GroupifyHome() {
  return (
    <div>
      <Navbar/>

      <div className='flex justify-start text-white mt-[150px] mb-[50px] pl-[80px]'>
        <div>
          <h1 className="font-extrabold font-poppins text-5xl mb-1 text-green-600">Meet Your Pals Over Game</h1>
          <p className='font-small'>Want to play games ?</p>
          <p className='font-small'>But don't get an opponent team?</p>
          <p className='font-small'>You can Invite a team or Join a pre-scheduled match Through Playvista</p>
          <Link to='/FindTeams'>
            <Button text="Find Teams" className= 'text-black font-bold h-[35px] w-[125px] bg-orange-600 hover:bg-orange-300 m-[70px] rounded'></Button>
            </Link>
        </div>
        <div className='flex items-center'>
        <img src={meetpals} className='h-[400px] w-auto ml-[200px]'/> 
        </div>
       </div>

        <div className='flex justify-end text-white mt-[150px] mb-[50px] pl-[80px]'>
        <div className='flex justify-start'>
        <img src={diff} className='h-[350px] w-auto mr-[300px]'/> 
        </div>
        <div className='pr-[100px]'>
          <h1 className="font-extrabold font-poppins text-5xl mb-1 text-green-600">Register your team</h1>
          <p className='font-small'>Want new opponents?</p>
          <p className='font-small'>Create your team and post it here</p>
          <p className='font-small'>Other teams/players can see and match Through Playvista</p>
          <Link to='/RegisterTeam'>
            <Button text="Register Team" className= 'text-black font-bold h-[35px] w-[125px] bg-orange-600 hover:bg-orange-300 m-[70px] rounded'></Button>
            </Link>
        </div>
      </div>

      <div className='flex justify-start text-white mt-[150px] mb-[50px] pl-[80px]'>
        <div>
          <h1 className="font-extrabold font-poppins text-5xl mb-1 text-green-600">COMPETE AND WIN</h1>
          <p className='font-small'>Want to be competitive?</p>
          <p className='font-small'>Get matched with opponents</p>
          <p className='font-small'>Earn exciting prices after winning</p>
            <Button text="Leaderboard" className= 'text-black font-bold h-[35px] w-[125px] bg-orange-600 hover:bg-orange-300 m-[70px] rounded'></Button>
        </div>
        <div className='flex items-center'>
        <img src={compete} className='h-[400px] w-auto ml-[350px]'/> 
        </div>
       </div>

       <div className=' mt-[150px] flex justify-center text-4xl font-extrabold font-poppins text-yellow-500'>
       <h1>TURFS NEAR YOU</h1>
       </div>
       <Cards/>
      <Footer/>
    </div>
  );
}

export default GroupifyHome;
