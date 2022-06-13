import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MakingOwl from "./Routes/MakingOwl";
import Create from "./Routes/Create";
import Home from './Components/Home';

const App = () => {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/makingowl" element={<MakingOwl />} />
      <Route path="/create" element={<Create />} />
    </Routes>
  </div>
  );
};

export default App;