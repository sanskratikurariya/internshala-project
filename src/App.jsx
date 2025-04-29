import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Use only Routes and Route
import SignUp from './components/SignUp';
import Home from './components/Home';
import './index.css';
import './App.css';
import Profile from './components/Profile';
import Login from './components/Login';
import Profile2 from './components/Profile2';

function App() {
  return (
    <div className='p-3 md:p-0 overflow-y-hidden overflow-x-hidden '>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile2" element={<Profile2  />} />
      </Routes>
   
     
    </div>
  );
}

export default App;
