import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './Components/Navbar/Navbar'
import LandingPage from './Components/LandingPage/landingPage'


function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
    </>
  );
}

export default App;
