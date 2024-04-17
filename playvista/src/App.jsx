import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AllTurf from './pages/allTurf';
import Football from './pages/Football';
import Badminton from './pages/Badminton';
import BookingPage from './pages/BookingPage';
import Groupify from './pages/Groupify'; 
import FindTeams from './pages/FindTeams';
import RegisterTeam from './pages/RegisterTeam';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/allTurf" element={<AllTurf />} />
        <Route path='/Football' element={<Football/>}/>
        <Route path='/Badminton' element={<Badminton/>}/>
        <Route path='/Groupify' element={<Groupify/>}/>
        <Route path='/FindTeams' element={<FindTeams/>}/>
        <Route path='/RegisterTeam' element={<RegisterTeam/>}/>
        {/* Define a route with a URL parameter for the BookingPage */}
        <Route path="/booking/:id" element={<BookingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
