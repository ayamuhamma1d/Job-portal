import { Badge, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
const RegisterCandidate = () => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const [skills, setSkills] = useState([]);
    const [emailExist, setEmailExist] = useState('');
    const isEmailAlreadyExists = (email) => {
        const candidates = JSON.parse(localStorage.getItem('candidatesData')) || [];
        return candidates.some(candidate => candidate.email === email);
    };
    const onFormSubmit = (data) => {
        const candidates = JSON.parse(localStorage.getItem('candidatesData')) || [];
        const emailExists = isEmailAlreadyExists(data.email);
        if (emailExists) {
            setEmailExist('Email already exist');
            return;
        } else {
            setEmailExist('');
        }
        const updatedCandidatesData = [...candidates, { ...data, skills }];
        if (data.name && data.email && data.role && (skills.length > 0 || !errors.skills)) {
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
    const handelReset = () => {
        setValue('name', '');
        setValue('email', '');
        setValue('role', '');
        setValue('skills', '');
        setSkills([]);
    }
    return (
        <Container className="py-5">
            <Form className="border p-5 w-50 m-auto bg-light" onSubmit={handleSubmit(onFormSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="text" placeholder="Name" {...register('name', { required: true, pattern: /^[a-zA-Z ]+$/ })} />
                    {errors?.name?.type === "required" && <p className='alert my-2 alert-danger'>Name is required</p>}
                    {errors?.name?.type === "pattern" && <p className='alert my-2 alert-danger'>Name is not valid</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                        type="email"
                        placeholder="Email"
                        {...register('email', {
                            required: true,
                            pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        })}
                        style={{ backgroundColor: emailExist ? 'red' : 'white' }}
                    />
                    {errors?.email?.type === "required" && <p className='alert my-2 alert-danger'>Email is required</p>}
                    {errors?.email?.type === "pattern" && <p className='alert my-2 alert-danger'>Email is not valid</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicRole">
                    <Form.Control type="text" placeholder="Role" {...register('role', { required: true })} />
                    {errors?.role?.type === "required" && <p className='alert my-2 alert-danger'>Role is required</p>}
                </Form.Group>
                <Form.Group className="mb-3">
                    <div className="d-flex">
                        <Form.Control type="text" placeholder="Skills" {...register('skills', { required: !skills.length })} id="skills" />
                        <Button className="bg-black border-0 add_btn ms-2" type="button" onClick={handleAddSkill}>
                            Add Skills
                        </Button>
                    </div>
                    <div className='d-flex w-100 justify-content-center align-items-center'>
                        {skills.map((skill, index) => (
                            <Badge key={index} className="me-2 mb-3 px-3 py-2 rounded-0 mt-2" bg="secondary">
                                {skill}
                            </Badge>
                        ))}
                    </div>
                    {errors?.skills?.type === 'required' && <p className="alert my-2 alert-danger">At least one skill is required</p>}
                </Form.Group>
                <div className="d-flex justify-content-between">
                    <Button className="bg-black border-0 d-block" type="submit">
                        Register
                    </Button>
                    <Button className="bg-black border-0 d-block" onClick={handelReset}>
                        Reset
                    </Button>
                </div>
                <p className='text-center'>{emailExist}</p>
            </Form>
        </Container>
    );
};
export default RegisterCandidate;
