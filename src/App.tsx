import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './sections/components/headerComponents/navbar/NavBar';
import UserRegistration from './sections/components/registrationForm/UserRegistration';
import LandingPage from './sections/pages/LandingPage';
import SignUpPage from './sections/pages/SignUpPage';
import StudentRegistration from "./sections/components/registrationForm/StudentRegistration";
import Support from './sections/pages/Support';
import ForgetPassword from './sections/pages/ForgetPassword';



function App() {
  return (
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/landingPage" component={LandingPage}/>
          <Route exact path="/signup" component={SignUpPage}/>
          <Route exact path="/registrationStudent" component={StudentRegistration}/>
          <Route exact path="/support" component={Support}/>
            <Route exact path="/forgetPassword" component={ForgetPassword}/>
        </Switch>
      </Router>
  );
}
export default App;
