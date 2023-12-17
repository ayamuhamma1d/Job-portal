import React from 'react';
import { Container, Badge } from 'react-bootstrap';

const ListCandidate = () => {
  const candidates = JSON.parse(localStorage.getItem('candidatesData')) || [];

  return (
    <Container className='py-5'>
      
      <div className="row g-3 justify-content-center align-items-center">
        {candidates.length > 0 ? (
          candidates.map((candidate, index) => (
            <div key={index} className="col-md-4">
              <div className="border bg-light p-4">
                <div className="mb-2">
                  <span className="fw-bold fs-2">Role : <span>{candidate.role}</span></span>
                </div>
                <div className="mb-2">
                  <span>Name : <span>{candidate.name}</span></span>
                </div>
                <div className="mb-2">
                  <span>Email : <span>{candidate.email}</span></span>
                </div>
                <div className="mb-2">
                  <h5 className='fw-bold'>Skills </h5>
                  <div className='d-flex w-100 justify-content-center align-items-center'>
                    {candidate.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} className="me-2 mb-3 px-3 py-2 rounded-0 mt-2" bg="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h3 className='fw-bold text-center text-secondary'>No candidates available.</h3>
        )}
      </div>
    </Container>
  );
};

export default ListCandidate;
