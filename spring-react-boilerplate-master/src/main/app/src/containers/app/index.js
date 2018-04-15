/* @flow */
import React from 'react';
import { Route } from 'react-router-dom';

import { Container } from 'reactstrap';

import Home from '../home';
import About from '../about';
import SignIn from '../signin'
import AppNav from '../appnav';

const Contact = () => (
    <div>
        <h1>Contact</h1>
        <p>Boilerplate application to demonstrate how to wire up Spring, JWT Authentication, React, Redux and Websockets</p>
    </div>
)

const App = () => (
  <div>
      <AppNav/>
      <Container>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/about-us" component={About} />
          <Route exact path="/contact" component={Contact} />
      </Container>
  </div>
);

export default App;
