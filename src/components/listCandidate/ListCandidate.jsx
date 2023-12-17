import React, { useState } from 'react';
import { Container, Badge, Button } from 'react-bootstrap';

const ListCandidate = () => {
  const candidatesData = JSON.parse(localStorage.getItem('candidatesData')) || [];
  const [candidates, setCandidates] = useState(candidatesData);
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    const findCandidate = candidatesData.filter((candidate) =>
      candidate.skills.some((skill) => skill.toLowerCase().includes(search.toLowerCase()))
    );
    setCandidates(findCandidate);
  };

  const handleListAll = () => {
    setCandidates(candidatesData);
    setSearch('');
  };

  return (
    <Container className='py-5'>
      <div className="search d-flex align-items-center justify-content-center mb-4">
        <input
          type="search"
          className='form-control w-50 '
          placeholder='Search skills'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button className="bg-black border-0 ms-2" onClick={handleSearch}>
          Search
        </Button>
        <Button className="bg-black border-0 ms-2" onClick={handleListAll}>
          List All
        </Button>
      </div>
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
