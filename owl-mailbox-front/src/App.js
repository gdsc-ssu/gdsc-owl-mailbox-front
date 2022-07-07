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
import LetterView from './Components/ViewPage/LetterView';
import ListView from './Components/ViewPage/ListView';
import SignUp from './Components/SignUp/SignUp';
import ReportCreate from './Components/Report/ReportCreate';
import ReportView from './Components/Report/ReportView';
import StampSelect from './Components/PostPage/StampSelect';
import TermsAndConditions from './Components/MyPage/Setting/AboutUs/TermsAndConditions';
import DeleteAccount from './Components/MyPage/Setting/AccountAdmin/DeleteAccount';

const App = () => {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/stampselect" element={< StampSelect/>} />

      <Route path="/setting" element={<Setting/>}/>
      <Route path="/setting/makingowl" element={<MakingOwl />} />
      <Route path="/setting/privacy" element={<Privacy/>}/>
      <Route path="/setting/termsandconditions" element={<TermsAndConditions/>}/>
      <Route path="/setting/deleteaccount" element={<DeleteAccount/>}/>

      <Route path="/login" element={<Login />} />
      <Route path="/signup/join" element={<LoginCallback />} />
      <Route path="/signup/v1/randomname" element={<NicknameRandom />} /> 
      
      {/* signup은 당장 필요없을 것 같지만 연결만 해뒀습니당*/}
      <Route path="/signup" element={<SignUp/>}/>
      
      <Route path="/viewpage" element={<ListView />} />
      <Route path="/viewpage/letter" element={<LetterView />} />

      <Route path="/report/create" element={< ReportCreate/>} />
      <Route path="/report/view" element={< ReportView/>} />

    </Routes>
  </div>
  );
};

export default App;