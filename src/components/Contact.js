import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Button } from 'react-bootstrap'

function ContactForm() {


    return (
        <div style={{backgroundColor: "#344968"}}>
            <h1>
                Send your contact info with any questions if you would like to reach out to me!
            </h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formControlTextarea">
                    <Form.Label>Message / Questions</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            <Button id="contactInfo" variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </div >
    );
}

export default ContactForm;