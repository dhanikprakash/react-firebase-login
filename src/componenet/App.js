import React from 'react';
import Signup from './Signup';
import { Container } from "react-bootstrap"
import { AuthProvider } from '../context/AuthContext';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Dashboard from"./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from './ForgotPassword';

function App() {

  return (
    <AuthProvider>
      <Container className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100Vh" }}>

        <div className="w-100" style={{ maxWidth: "400px" }}>

         <Router>
           <Switch>
             <PrivateRoute exact path ="/" component={Dashboard}></PrivateRoute>
             <Route path="/signup" component={Signup}></Route>
             <Route path="/login" component={Login}></Route>
             <Route path="/forgot-password" component={ForgotPassword}></Route>
           </Switch>
         </Router>
        </div>
      </Container>
    </AuthProvider>
  );
}

export default App;
