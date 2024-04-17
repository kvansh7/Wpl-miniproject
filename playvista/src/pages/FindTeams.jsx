import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { db } from '../config/firebase-config';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';

function FindTeams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      const teamsCollection = collection(db, 'teams');
      const teamsSnapshot = await getDocs(teamsCollection);
      const teamsData = teamsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTeams(teamsData);
    };

    fetchTeams();
  }, []);

  const handleDecrementPlayers = async (id, requiredPlayers, isFull) => {
    if (requiredPlayers > 0 && !isFull) {
      try {
        // Update required players and isFull status in Firestore
        const teamRef = doc(db, 'teams', id);
        await updateDoc(teamRef, {
          requiredPlayers: requiredPlayers - 1,
          isFull: requiredPlayers - 1 === 0 ? true : false
        });

        // Update state to reflect changes
        setTeams(prevTeams =>
          prevTeams.map(team =>
            team.id === id ? { ...team, requiredPlayers: requiredPlayers - 1, isFull: requiredPlayers - 1 === 0 ? true : false } : team
          )
        );
      } catch (error) {
        console.error('Error updating team:', error);
      }
    }
  };

  return (
    <div className='flex flex-col bg-black text-white h-screen'>
      <Navbar />
      <h2 className='text-3xl font-semibold mt-8 mb-4 text-center'>Teams List</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 p-6'>
        {teams.map(team => (
          <div key={team.id} className='shadow-md rounded-lg overflow-hidden bg-slate-600'>
            <div className='p-6'>
              <h3 className='text-xl font-semibold mb-2'>{team.name}</h3>
              <p className='mb-2'>Location: {team.location}</p>
              <p className='mb-2'>Sport: {team.sport}</p>
              <p className='mb-2'>Contact: {team.contact}</p>
              <p className='mb-2'>Required Players: {team.requiredPlayers}</p>
              <button
                className={`bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-400 ${team.isFull ? 'cursor-not-allowed opacity-50' : ''}`}
                onClick={() => handleDecrementPlayers(team.id, team.requiredPlayers, team.isFull)}
                disabled={team.isFull}
              >
                {team.isFull ? 'Full' : 'JOIN NOW'}
              </button>
              <a href={team.link} className='text-blue-500 hover:underline block mt-2'>Location Link</a>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default FindTeams;
