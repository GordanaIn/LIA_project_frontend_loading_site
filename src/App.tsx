import React, {FC, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './sections/components/headerComponents/navbar/NavBar';

import LandingPage from './sections/pages/LandingPage';
import SignUpPage from './sections/pages/SignUpPage';
import StudentRegistration from "./sections/pages/StudentRegistration";
import Support from './sections/pages/Support';
import ForgetPassword from './sections/pages/ForgetPassword';


import Logo from "./sections/components/headerComponents/logan/Logo";
import Footer from "./sections/components/headerComponents/Footer";
import Contact from "./sections/pages/Contact";
import AboutUs from "./sections/pages/AboutUs";




const App:FC<{}> = () =>{

  return (
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/home" exact={true} component={LandingPage}/>
          <Route path="/signup" exact={true} component={SignUpPage}/>
          <Route path="/logo" exact={true} component={Logo}/>
          <Route path="/registrationStudent" exact={true} component={StudentRegistration}/>
          <Route path="/support" exact={true} component={Support}/>
          <Route path="/contact" exact={true} component={Contact}/>
          <Route path="/aboutUs" exact={true} component={AboutUs}/>
          <Route path="/forgetPassword" exact={true} component={ForgetPassword}/>
        </Switch>
          <Footer/>
      </Router>
  );
}
export default App;
