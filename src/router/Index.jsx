// src/router/index.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from '../pages/Homepage';
// import AdminDashboard from '../pages/Admin/Dashboard';
// import ManageCars from '../pages/Admin/ManageCars';
// import UserProfile from '../pages/User/Profile';
// import UserBookings from '../pages/User/Bookings';
import Navbar from '../pages/Navbar';
import Lists from '../pages/Cars/Lists';
import { ThreeDCardDemo } from '../pages/Cars/CarListCards.jsx';

const AppRouter = () => {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Homepage />} />
        
         <Route path="car/store" element={<Lists />} />
         <Route path="car/cards" element={<ThreeDCardDemo />} />
       {/* <Route path="user/profile" element={<UserProfile />} />
        <Route path="user/bookings" element={<UserBookings />} />  */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
