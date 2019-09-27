import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage';
import LoginPage from './pages/login';
import RegisterPage from './pages/registerpage';
import ServicesPage from './pages/servicespage';
import AboutusPage from './pages/aboutus';
import DashPage from './pages/dashpage';
import RecordsPage from './pages/recordspage';
import SummaryPage from './pages/summarypage';
import MessagePage from './pages/messagepage';
import VerifyPage from './pages/verifypage';

function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route path="/" component={HomePage} exact />
    <Route path="/login" component={LoginPage} />
    <Route path="/register"component={RegisterPage}/>
    <Route path="/services"component={ServicesPage}/>
    <Route path="/aboutus"component={AboutusPage}/>
    <Route path="/dashboard"component={DashPage}/>
    <Route path="/records"component={RecordsPage}/>
    <Route path="/summary"component={SummaryPage}/>
    <Route path="/message"component={MessagePage}/>
    <Route path="/verifypage"component={VerifyPage}/>
    
    </Switch>
    </BrowserRouter>
  );
}

export default App;
