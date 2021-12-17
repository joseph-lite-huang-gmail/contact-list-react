import React from 'react';
import { Table, Button } from 'react-bootstrap'

class ContactTable extends React.Component {
    // this static property will initialize a prop with data
    // if it hasn't been provided by the parent component
    static defaultProps = {
        contacts: [
            {
                "contactId": 1,
                "firstName": "Still Fake",
                "lastName": "Contact",
                "company": "Unknown Inc.",
                "phone": "000-0000",
                "email": "stillfake@unknown.io"
            },
            {
                "contactId": 2,
                "firstName": "So Mysterious",
                "lastName": "Contact",
                "company": "Unknown Inc.",
                "phone": "000-0000",
                "email": "somysterious@unknown.io"
            }
        ]
    }

    constructor(props) {
        super(props);
    }

    render() {
        // Here is a debug method to monitor incoming contact data
        console.log("Rendering Contact Table:")
        console.log(this.props.contacts)
        return (<Table striped bordered responsive>
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Company</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {this.props.contacts.map((contact, i) => {
                    return (<tr key={i}>
                        <td>{contact.contactId}</td>
                        <td>{contact.firstName}</td>
                        <td>{contact.lastName}</td>
                        <td>{contact.company}</td>
                        <td>{contact.phone}</td>
                        <td>{contact.email}</td>
                        <td><Button>Edit</Button></td>
                        <td><Button>Delete</Button></td>
                    </tr>)
                })}
            </tbody>
        </Table>)
    }
}

export default ContactTable