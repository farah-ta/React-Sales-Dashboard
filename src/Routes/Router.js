import React from "react";
import { BrowserRouter,Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../Pages/dashboard";
import Sales from "../Pages/sales";
import Bookings from "../Pages/bookings";
import Members from "../Pages/Members";

const Router = () => {
  return <Routes>
      <Route
        path="/"
        element={<Navigate to="/dashboard" element={<Dashboard />} />}
      />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/members" element={<Members />} />
      <Route path="/sales" element={<Sales />} />
    </Routes>
    
 
};

export default Router;