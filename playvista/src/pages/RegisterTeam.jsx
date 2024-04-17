import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { db } from '../config/firebase-config';
import { collection, addDoc } from 'firebase/firestore';

function RegisterTeam() {
  const [formData, setFormData] = useState({
    contact: '',
    link: '',
    location: '',
    name: '',
    requiredPlayers: '',
    sport: '',
    isFull: false // Set initial value of isFull to false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const teamsCollection = collection(db, 'teams');
      await addDoc(teamsCollection, formData);
      console.log('Team registered successfully!');
      // Optionally, reset the form data after submission
      setFormData({
        contact: '',
        link: '',
        location: '',
        name: '',
        requiredPlayers: '',
        sport: '',
        isFull: false
      });
      // Show alert and redirect to homepage
      window.alert('Thank you for registering!');
      window.location.href = '/';
    } catch (error) {
      console.error('Error registering team:', error);
    }
  };
  
  return (
    <div className="bg-black text-white min-h-screen mb-2">
      <Navbar />
      <div className="max-w-md mx-auto mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">Register Your Team</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium">Team Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full mt-1 p-2 border rounded-md bg-gray-800 text-white" required />
          </div>
          <div className="mb-4">
            <label htmlFor="sport" className="block text-sm font-medium">Sport</label>
            <input type="text" id="sport" name="sport" value={formData.sport} onChange={handleChange} className="w-full mt-1 p-2 border rounded-md bg-gray-800 text-white" required />
          </div>
          <div className="mb-4">
            <label htmlFor="location" className="block text-sm font-medium">Location</label>
            <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} className="w-full mt-1 p-2 border rounded-md bg-gray-800 text-white" required />
          </div>
          <div className="mb-4">
            <label htmlFor="contact" className="block text-sm font-medium">Contact</label>
            <input type="text" id="contact" name="contact" value={formData.contact} onChange={handleChange} className="w-full mt-1 p-2 border rounded-md bg-gray-800 text-white" required />
          </div>
          <div className="mb-4">
            <label htmlFor="link" className="block text-sm font-medium">Location Link</label>
            <input type="text" id="link" name="link" value={formData.link} onChange={handleChange} className="w-full mt-1 p-2 border rounded-md bg-gray-800 text-white" required />
          </div>
          <div className="mb-4">
            <label htmlFor="requiredPlayers" className="block text-sm font-medium">Required Players</label>
            <input type="number" id="requiredPlayers" name="requiredPlayers" value={formData.requiredPlayers} onChange={handleChange} className="w-full mt-1 p-2 border rounded-md bg-gray-800 text-white" required />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Register</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default RegisterTeam;
