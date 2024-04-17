import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { turf } from '../constants';
import { useParams } from 'react-router-dom';

function BookingPage() {
  const { id } = useParams();
  const selectedTurf = turf.find(item => item.id === id);

  const imageStyle = {
    width: '400px',
    height: '300px',
    objectFit: 'cover',
  };

  const [selectedTime, setSelectedTime] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    let isValid = true;
  
    if (!selectedTime) {
      errors.selectedTime = 'Please select a time';
      isValid = false;
    }
  
    if (!phoneNumber || !/^\d{10}$/.test(phoneNumber)) {
      errors.phoneNumber = 'Please enter a valid 10-digit phone number';
      isValid = false;
    }
  
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Please enter a valid email address';
      isValid = false;
    }
  
    if (!name) {
      errors.name = 'Please enter your name';
      isValid = false;
    }
  
    return { errors, isValid };
  };
  
  const handleBooking = () => {
    const { errors, isValid } = validateForm();
  
    if (isValid) {
      console.log('Selected Time:', selectedTime);
      console.log('Phone Number:', phoneNumber);
      console.log('Email:', email);
      console.log('Name:', name);
      // Implement booking logic here
    } else {
      setErrors(errors);
    }
  };
  
  return (
    <div className='w-full'>
      <Navbar />
      <div className='flex justify-center items-center mt-20 mb-20'>
        <div className='w-[600px] mr-8 bg-gray-500 flex justify-center items-center flex-col rounded-lg shadow-lg'>
          <h1 className='text-3xl font-semibold text-black mb-4'>{selectedTurf.title}</h1>
          <img src={selectedTurf.img || turfit} alt={selectedTurf.title} style={imageStyle} className='mb-4 rounded-lg shadow-lg' />
          <p className='text-lg text-black mb-2'>{selectedTurf.location}</p>
          <a href={selectedTurf.maps} target='_blank' rel='noreferrer' className='text-white hover:text-blue-400 mb-4 block'>View on Map</a>
        </div>
        <div className='p-8 rounded-lg shadow-lg text-black'>
          <h2 className='text-2xl font-semibold mb-4'>Choose Timing:</h2>
          <select value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} className='mb-4 w-full p-2 border border-gray-300 rounded-lg text-black'>
            <option value=''>Select Time</option>
            <option value='Morning'>Morning</option>
            <option value='Afternoon'>Afternoon</option>
            <option value='Evening'>Evening</option>
          </select>
          {errors.selectedTime && <p className='text-red-500 mb-2'>{errors.selectedTime}</p>}
          <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} className='w-full mb-4 p-2 border border-gray-300 rounded-lg' />
          {errors.name && <p className='text-red-500 mb-2'>{errors.name}</p>}
          <input type='text' placeholder='Phone Number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className='w-full mb-4 p-2 border border-gray-300 rounded-lg' />
          {errors.phoneNumber && <p className='text-red-500 mb-2'>{errors.phoneNumber}</p>}
          <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} className='w-full mb-4 p-2 border border-gray-300 rounded-lg' />
          {errors.email && <p className='text-red-500 mb-2'>{errors.email}</p>}
          <button className={`bg-orange-600 text-white py-1 px-1 rounded-lg hover:bg-orange-400 w-full ${!validateForm() && 'opacity-50 cursor-not-allowed'}`} onClick={handleBooking}>Book Now</button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default BookingPage;
