import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MakingOwl from "./Routes/MakingOwl";
import Create from "./Routes/Create";
import Home from './Components/Home';
import Setting from './Routes/Setting';
import Privacy from './Routes/Privacy';
import Login from './Components/Login/Login';
import LoginCallback from './Components/Login/LoginCallback';
import NicknameRandom from './Components/Login/NicknameRandom';

const App = () => {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/makingowl" element={<MakingOwl />} />
      <Route path="/create" element={<Create />} />
      <Route path="/setting" element={<Setting/>}/>
      <Route path="/setting/privacy" element={<Privacy/>}/>
      <Route path="/login" element={<Login />} />
      <Route path="/signup/join" element={<LoginCallback />} />
      <Route path="/signup/v1/randomname" element={<NicknameRandom />} /> 
    </Routes>
  </div>
  );
};

export default App;