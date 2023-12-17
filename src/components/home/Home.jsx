import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container className="py-5 mt-5">
      <Row className="align-items-center justify-content-center text-center">
        <Col>
          <Link to="/register-candidate" className="bg-black btn btn-black text-white">
            Register Candidate
          </Link>
        </Col>
        <Col>
          <Link to="/list-candidate" className="bg-black btn text-white">
            List Candidate
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
