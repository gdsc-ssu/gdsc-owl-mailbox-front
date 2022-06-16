import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";


 import Create from "../src/Routes/Create";
 const RouterComponent = () => {
    UseGoogleAnalytics();
    return (
      <Switch>
        <Route path="/create" exact>
          <Create />
        </Route>
        <Redirect path="*" to="/" />
      </Switch>
    );
  };
  const RouterExporter = () => (
    <Router basename="/owl-mailbox">
      <RouterComponent />
    </Router>
  );

  const Router = () =>{
    return (
      <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={} /> */}
        <Route path ="/login" element={<Login />} />
        <Route path = "/kakaoLogin" element={<KakaoLogin />} />
      </Routes>
      </BrowserRouter>
    );
  };
  
  export default RouterExporter;
  