import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "../Pages/Contact";
import Chart from "../Pages/Chart";
import Create from "../Components/Create";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Contact />} />
      <Route path="/chart" element={<Chart />} />
    </Routes>
  );
};

export default AllRoutes;
