import React from 'react';

import './App.css';

import ContactTable from './components/ContactTable'
import ContactForm from './components/ContactForm'
import ContactModal from './components/ContactModal'

import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const SERVICE_URL = "http://contactlist.us-east-1.elasticbeanstalk.com"

class App extends React.Component {

  state = {
    loading: false,
    contactData: [
      {
        "contactId": 1, "firstName": "Fake",
        "lastName": "Data",
        "company": "Unknown Inc.",
        "phone": "000-0000",
        "email": "fakedata@unknown.io"
      }],
    newContactData: {
      firstName: '',
      lastName: '',
      company: '',
      phone: '',
      email: ''
    }
  }

  componentDidMount() {
    console.log("App is now mounted.")
    this.setState({ loading: true })
    console.log("Loading contact data")
    fetch(SERVICE_URL + "/contacts")
      .then(data => data.json())
      .then(data => this.setState(
        { contactData: data, loading: false }
      ))
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <h1 className="text-center">Contact Application</h1>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col sm={8}>
            <h2>My Contacts</h2>
            <ContactTable contacts={this.state.contactData} />
          </Col>
          <Col sm={4}>
            <h2>Add New Contact</h2>
            <ContactForm contactData={this.state.newContactData} />
          </Col>
        </Row>
        {/* <ContactModal /> */}
      </Container>
    );
  }
}

export default App;
