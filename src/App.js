import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Covid from './components/Covid';

class App extends Component {
  render() {
    return (
      <Container fluid>
        <Covid />
      </Container>
    );
  }
}

export default App;
