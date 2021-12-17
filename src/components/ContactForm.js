import React from 'react';
import { Form, Button } from 'react-bootstrap'

class ContactForm extends React.Component {
    render() {
        let { contactData } = this.props;
        return (
            <Form>
                <Form.Group controlId="contactFirstName">
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control type="text" placeholder="First Name" name="firstName"
                        value={contactData.firstName} />
                </Form.Group>
                <Form.Group controlId="contactLastName">
                    <Form.Label>Last Name:</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" name="lastName"
                        value={contactData.lastName} />
                </Form.Group>
                <Form.Group controlId="contactCompany">
                    <Form.Label>Company:</Form.Label>
                    <Form.Control type="text" placeholder="Company" name="company"
                        value={contactData.company} />
                </Form.Group>
                <Form.Group controlId="contactPhone">
                    <Form.Label>Phone Number:</Form.Label>
                    <Form.Control type="phone" placeholder="Phone Number" name="phone"
                        value={contactData.phone} />
                </Form.Group>
                <Form.Group controlId="contactEmail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" placeholder="Email" name="email"
                        value={contactData.email} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }
}

export default ContactForm