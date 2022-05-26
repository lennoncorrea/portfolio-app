import { useState } from "react";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";

const FormApp = ({ onHide }: { onHide: () => void }) => {

    const [validated, setValidated] = useState(false);
    const handleSubmit = (event: React.FormEvent<HTMLInputElement> | any): void => {
        const form = event.currentTarget;
        setValidated(true);
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            return;
        }
        onHide();
        event.preventDefault();
    }

    return (
        <>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="form">
                    <Row>
                        <Col>
                            <Form.Control type="text" placeholder="Name" required />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">Please type your name</Form.Control.Feedback>
                        </Col>
                        <Col>
                            <Form.Control type="email" placeholder="Email" required />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">Please type your email</Form.Control.Feedback>
                        </Col>
                    </Row>
                </Form.Group>
                <FloatingLabel controlId="floatingTextarea" label="Message" className="mb-3">
                    <Form.Control as="textarea" style={{ height: '150px' }} />
                </FloatingLabel>
                <Form.Group className="mb-3" controlId="checkbox">
                    <Form.Check type="checkbox" label="I'm a human" required />
                    <Form.Control.Feedback />
                </Form.Group>
                <Button variant="primary" type="submit" >Submit</Button>
            </Form>
        </>
    )
};

export default FormApp
