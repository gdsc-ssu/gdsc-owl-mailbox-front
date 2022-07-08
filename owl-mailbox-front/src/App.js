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
import SignUp from './Components/SignUp/SignUp';
import ReportCreate from './Components/Report/ReportCreate';
import ReportView from './Components/Report/ReportView';
import DeleteAccount from './Components/MyPage/Setting/AccountAdmin/DeleteAccount';
import HomeSimul from './Components/HomeSimul';
import MyPagePresenter from './Routes/MyPage';
import EditName from './Components/MyPage/EditName';
import SentListViewPresenter from './Routes/TempListView';
import TempListViewPresenter from './Routes/TempListView';
import StampSelectPresenter from './Routes/StampSelect';
import LetterViewPresenter from './Routes/LetterView';
import ListViewPresenter from './Routes/ListView';
import ReportSelectPresenter from './Routes/ReportSelect';
import TermsAndConditionsPresenter from './Routes/TermsAndConditions';

const App = () => {
  return (
    <div>
    <Routes>
      <Route path="/" element={<HomeSimul />} />
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/create" element={<Create />} />
      <Route path="/stampselect" element={< StampSelectPresenter/>} />

      <Route path="/mypage" element={<MyPagePresenter />} />
      <Route path="/mypage/editname" element={<EditName />} />
      <Route path="/mypage/sentmailbox" element={<SentListViewPresenter />} />
      <Route path="/mypage/tempmailbox" element={<TempListViewPresenter />} />

      <Route path="/setting" element={<Setting/>}/>
      <Route path="/setting/makingowl" element={<MakingOwl />} />
      <Route path="/setting/privacy" element={<Privacy/>}/>
      <Route path="/setting/termsandconditions" element={<TermsAndConditionsPresenter/>}/>
      <Route path="/setting/deleteaccount" element={<DeleteAccount/>}/>

      <Route path="/login" element={<Login />} />
      <Route path="/signup/join" element={<LoginCallback />} />
      <Route path="/signup/v1/randomname" element={<NicknameRandom />} /> 
      
      {/* signup은 당장 필요없을 것 같지만 연결만 해뒀습니당*/}
      <Route path="/signup" element={<SignUp/>}/>
      
      <Route path="/viewpage" element={<ListViewPresenter />} />
      <Route path="/viewpage/letter" element={<LetterViewPresenter />} />


      <Route path="/report/view" element={< ReportSelectPresenter/>} />

    </Routes>
  </div>
  );
};

export default App;