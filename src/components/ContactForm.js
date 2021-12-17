import React from 'react';
import { Form, Button } from 'react-bootstrap'

class ContactForm extends React.Component {
    render() {
        let { contactData, handleSubmit, handleChange } = this.props;
        return (
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="contactFirstName">
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control type="text" placeholder="First Name" name="firstName"
                        value={contactData.firstName} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="contactLastName">
                    <Form.Label>Last Name:</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" name="lastName"
                        value={contactData.lastName} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="contactCompany">
                    <Form.Label>Company:</Form.Label>
                    <Form.Control type="text" placeholder="Company" name="company"
                        value={contactData.company} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="contactPhone">
                    <Form.Label>Phone Number:</Form.Label>
                    <Form.Control type="phone" placeholder="Phone Number" name="phone"
                        value={contactData.phone} onChange={handleChange}
                        pattern="[0-9]{3}-[0-9]{4}" required />
                    <Form.Text className="text-muted">
                        Format Example: 123-4567
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="contactEmail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" placeholder="Email" name="email"
                        value={contactData.email} onChange={handleChange} required />
                    <Form.Text className="text-muted">
                        Format Example: ada@lovelace.com
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }
}

export default ContactForm