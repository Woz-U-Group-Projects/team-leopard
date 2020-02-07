import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Header from '../components/Header.js';
import axios from 'axios';
import './Style.css';

function Register() {
    function FormRegister() {
        var formData = new FormData();

        function handleChange (e) {
            formData.set( e.target.name, e.target.value)
        }

        const [validated, setValidated] = React.useState(false);
        const handleSubmit = event => {
            const form = event.currentTarget;
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            if (form.checkValidity() === true) {
                const user = {
                    firstname: formData.firstname,
                    lastname: formData.lastname,
                    email: formData.email,
                    password: formData.password
                };
                axios.post('/registration', { user })
                    .then(res => {
                        console.log(res);
                    })
            }
            setValidated(true);
        };

        return (
            <Container fluid>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Row>
                        <Col lg="auto">
                            <Form.Group controlId="validationCustom01">
                                <Form.Label>First name</Form.Label>
                                <Form.Control required type="text" placeholder="First name" defaultValue="John" name='firstname' onChange={handleChange} />
                                <Form.Control.Feedback>Accepted</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col lg="auto">
                            <Form.Group controlId="validationCustom02">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control required type="text" placeholder="Last name" defaultValue="Doe" name='lastname' onChange={handleChange} />
                                <Form.Control.Feedback>Accepted</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col lg="auto">
                            <Form.Group controlId="validationCustomEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control required type="email" placeholder="Email" defaultValue="email@host.com" name='email' onChange={handleChange} />
                                <Form.Control.Feedback>Accepted</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please input an email</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col lg="auto">
                            <Form.Group controlId="validationPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control required type="password" placeholder="Password" name='password' onChange={handleChange} />
                                <Form.Control.Feedback>Accepted</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please input a password</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Button variant="danger" type="reset">Reset</Button>
                        <Button variant="success" type="submit">Submit</Button>
                    </Form.Row>
                </Form>
            </Container>
        );
    }
    return (
        <>
            <div id="backgroundImageContainer" className="page-holder bg-cover-register">
                <div className="main-wrapper">
                    <Header title="Register" />
                    <div className="col-lg-10 hidden-xs">

                    </div>
                    <div className="col-lg-2 border-primary mb-1 text-white rightBar">
                        <FormRegister />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register