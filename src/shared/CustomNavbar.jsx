import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './customNavbar.css';
import { Link } from 'react-router-dom';

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-transparent">
      <Container fluid>
        <Navbar.Brand href="#home" className="fw-bold fs-2 text text-center offset-4 col-md-4">
          Job Portal
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="col-md-4 align-items-center ">
            <Link to="./home" className="btn bg-black text-white rounded-2 mx-2 text-decoration-none">
              Home
            </Link>
            <Link to="./register-candidate" className="btn bg-black text-white  rounded-2 mx-2 text-decoration-none">
               Registration
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
