import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DashboardPage from "./pages/DashboardPage";
import WeatherPage from "./pages/WeatherPage";
import RoadHazardPage from "./pages/RoadHazardPage";

import "./App.css";
// import "./css/style.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/weather" element={<WeatherPage />} />
        <Route path="/hazard" element={<RoadHazardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
