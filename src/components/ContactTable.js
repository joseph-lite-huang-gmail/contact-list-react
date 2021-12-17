import React from 'react';
import { Table, Button } from 'react-bootstrap'

class ContactTable extends React.Component {
    render() {
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
                <tr>
                    <td>1</td>
                    <td>Fake</td>
                    <td>Contact</td>
                    <td>Unknown Inc.</td>
                    <td>000-0000</td>
                    <td>fake@unknown.io</td>
                    <td><Button>Edit</Button></td>
                    <td><Button>Delete</Button></td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Mystery</td>
                    <td>Contact</td>
                    <td>Unknown Inc.</td>
                    <td>000-0000</td>
                    <td>mystery@unknown.io</td>
                    <td><Button>Edit</Button></td>
                    <td><Button>Delete</Button></td>
                </tr>
            </tbody>
        </Table>)
    }
}

export default ContactTable