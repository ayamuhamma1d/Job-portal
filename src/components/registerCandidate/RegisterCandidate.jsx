import { Badge, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const RegisterCandidate = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [skills, setSkills] = useState([]);

 const onFormSubmit = (data) => {
  console.log(data);

  const candidates = JSON.parse(localStorage.getItem('candidatesData')) || [];
  const updatedCandidatesData = [...candidates, { ...data, skills }];

  if (data.name && data.email && data.password && data.role && (skills.length > 0 || !errors.skills)) {
    localStorage.setItem('candidatesData', JSON.stringify(updatedCandidatesData));
    setValue('name', '');
    setValue('email', '');
    setValue('role', '');
    setValue('skills', '');
    setSkills([]);
  }
};
  const handleAddSkill = () => {
    const skillsInput = document.getElementById('skills');
    if (skillsInput) {
      const newSkill = skillsInput.value;
      if (newSkill.trim() !== '') {
        setSkills((prevSkills) => [...prevSkills, newSkill]);
        setValue('skills', [...skills, newSkill]); 
        skillsInput.value = '';
      }
    }
  };

  return (
    <Container className="py-5">
      <Form className="border p-5 w-50 m-auto bg-light" onSubmit={handleSubmit(onFormSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control type="text" placeholder="Name" {...register('name', { required: true, pattern: /^[a-zA-Z ]+$/ })} />
          {errors?.name?.type === "required" && <p className='alert my-2 alert-danger'>Name is required</p>}
          {errors?.name?.type === "pattern" && <p className='alert my-2 alert-danger'>Name is not valid</p>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Email" {...register('email', { required: true, pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ })} />
          {errors?.email?.type === "required" && <p className='alert my-2 alert-danger'>Email is required</p>}
          {errors?.email?.type === "pattern" && <p className='alert my-2 alert-danger'>Email is not valid</p>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicRole">
          <Form.Control type="text" placeholder="Role" {...register('role', { required: true })} />
          {errors?.role?.type === "required" && <p className='alert my-2 alert-danger'>Role is required</p>}
        </Form.Group>
        <Form.Group className="mb-3" >
          <div className="d-flex">
            <Form.Control type="text" placeholder="Skills" {...register('skills', { required: !skills.length })} id="skills" />
            <Button className="bg-black border-0 add_btn ms-2" type="button" onClick={handleAddSkill}>
              Add Skills
            </Button>
          </div>
          <div className='d-block w-100'>
            {skills.map((skill, index) => (
              <Badge key={index} className="me-2 mb-3 px-3 py-2" bg="secondary">
                {skill}
              </Badge>
            ))}
          </div>
          {errors?.skills?.type === 'required' && <p className="alert my-2 alert-danger">At least one skill is required</p>}
        </Form.Group>
    
        <Button className="bg-black border-0 d-block" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default RegisterCandidate;
