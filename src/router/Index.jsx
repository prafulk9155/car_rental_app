import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Homepage from '../pages/Homepage';
// import AdminDashboard from '../pages/Admin/Dashboard';
// import ManageCars from '../pages/Admin/ManageCars';
// import UserProfile from '../pages/User/Profile';
// import UserBookings from '../pages/User/Bookings';
import Navbar from '../pages/Navbar';
import Lists from '../pages/Cars/Lists';
import { ThreeDCardDemo } from '../pages/Cars/CarListCards.jsx';
import { CarDetailsStickyScroll } from '../pages/Cars/Details.jsx';
import { TabsComponent } from '../pages/Admin/Tabs.jsx';
import RegisterCover from '../common/register/RegisterCover.jsx';

const AppRouter = () => {
  const location = useLocation();
  
  // List of paths where the Navbar should not be shown
  const pathsWithoutNavbar = ['/admin/tabs'];
  // const pathsWithoutNavbar = ['/user/register'];

  return (
    <>
      {!pathsWithoutNavbar.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="car/store" element={<Lists />} />
        <Route path="car/cards" element={<ThreeDCardDemo />} />
        {/* <Route path="user/profile" element={<UserProfile />} />
        <Route path="user/bookings" element={<UserBookings />} />  */}
        <Route path="user/register" element={<RegisterCover />} />
        <Route path="car/details" element={<CarDetailsStickyScroll />} />
        <Route path="admin/tabs" element={<TabsComponent />} />
      </Routes>
    </>
  );
};

const App = () => (
  <Router>
    <AppRouter />
  </Router>
);

export default App;
