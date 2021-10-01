import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './sections/components/headerComponents/navbar/NavBar';
import UserRegistration from './sections/components/registrationForm/UserRegistration';
import LandingPage from './sections/pages/LandingPage';
import SignUpPage from './sections/pages/SignUpPage';



function App() {
  return (
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/landingPage" component={LandingPage}/>
          <Route exact path="/signup" component={SignUpPage}/>
          <Route exact path="/regForm" component={UserRegistration}/>
        </Switch>
      </Router>
  );
}
export default App;
