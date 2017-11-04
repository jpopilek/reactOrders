import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem } from 'react-bootstrap';

const PublicNavigation = () => (
  <Nav pullRight>
    <LinkContainer to="signup">
      <NavItem eventKey={ 1 } href="/signup">Register Business</NavItem>
    </LinkContainer>
    <LinkContainer to="usersignup">
      <NavItem eventKey={ 2 } href="/usersignup">User Signup</NavItem> 
    </LinkContainer>
    <LinkContainer to="login">
      <NavItem eventKey={ 3 } href="/login">Log In</NavItem>
    </LinkContainer>
  </Nav>
);

export default PublicNavigation;
