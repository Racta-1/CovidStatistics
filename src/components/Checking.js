import React, { Component } from 'react';
import { Form, Button, Row, Col, Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import covid19 from '../images/covid19.png';
import axios from 'axios';

class Checking extends Component {
  state = {
    info: [],
    country: [],
    selectedCountry: null,
  };

  listCountry = () => {
    const data = {
      'x-rapidapi-key': '8c896413c0msh5b94573c829464ep19e019jsnb748311900da',
      'x-rapidapi-host': 'covid-193.p.rapidapi.com',
    };
    axios
      .get(`https://covid-193.p.rapidapi.com/countries`, {
        headers: data,
      })
      .then((response) => {
        this.setState({
          country: response.data.response,
        });
        console.log(this.state.country);
      })
      .catch((err) => {
        console.log(err);
      });
    onInputChange = (e) => {
      this.setState({
        selectedCountry: e.target.value,
      });
    };
    const { country, selectedCountry } = this.state;
    return (
      <Form.Control
        as="select"
        size="lg"
        custom
        onChange={this.onInputChange}
        defaultValue={'DEFAULT'}
      >
        <option value="DEFAULT" disabled>
          Select Country
        </option>
        {country.map((count) => (
          <option key={count} value={count}>
            {count}
          </option>
        ))}
      </Form.Control>
    );
  };
  componentDidMount() {
    const data = {
      'x-rapidapi-key': '8c896413c0msh5b94573c829464ep19e019jsnb748311900da',
      'x-rapidapi-host': 'covid-193.p.rapidapi.com',
    };
    axios
      .get(`https://covid-193.p.rapidapi.com/statistics?country=ghana`, {
        headers: data,
      })
      .then((response) => {
        this.setState({
          info: response.data.response,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onFormSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    const { info } = this.state;
    console.log(info);
    return (
      <div>
        <h1 className="display-2 text-white text-center font-weight-bold mb-5 mt-3">
          Covid Statistics
          <img
            className="img-fluid ml-4"
            width="60"
            height="60"
            src={covid19}
            alt="Covid Logo"
          />
        </h1>
        <Form className="mb-5" onSubmit={this.onFormSubmit}>
          <Form.Group as={Row}>
            <Col sm={{ span: 7, offset: 2 }}>{this.listCountry}</Col>
            <Col sm={3} className="mx-auto">
              <Button className="btn-lg" type="submit">
                Submit
              </Button>
            </Col>
          </Form.Group>
        </Form>
        <Jumbotron className="mt-5 bg-white shadow">
          {info.map((req) => (
            <Row key={req.country}>
              <Col sm={6}>
                <h1 className="mb-5 p-3 bg-back text-white text-center rounded shadow">
                  Country
                </h1>
                <h2 className="mt-5 mb-5 p-5 bg-primary text-white text-center display-2 rounded shadow">
                  <span>{req.country}</span>
                </h2>
              </Col>
              <Col sm={6}>
                <h1 className="mb-5 p-3 bg-back text-white text-center rounded shadow">
                  Cases
                </h1>
                <Row>
                  <Col>
                    <small className="bg-primary text-white font-weight-bold p-2 rounded">
                      Population:
                      <span className="ml-5">
                        {req.population
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                      </span>
                    </small>
                    <hr />
                    <h4>
                      Active :
                      <span className="ml-5">
                        {req.cases.active
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                      </span>
                    </h4>
                    <hr />
                    <h4>
                      Critical :
                      <span className="ml-5">
                        {req.cases.critical
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                      </span>
                    </h4>
                    <hr />
                    <h4>
                      New :
                      <span className="ml-5">
                        {req.cases.new == null
                          ? (req.cases.new = 0)
                          : req.cases.new
                              .toString()
                              .substring(1)
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                      </span>
                    </h4>
                    <hr />
                    <h4>
                      Recovered :
                      <span className="ml-5">
                        {req.cases.recovered
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                      </span>
                    </h4>
                    <hr />
                    <h2 className="text-right">
                      Total :
                      <span className="ml-5">
                        {req.cases.total
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                      </span>
                    </h2>
                  </Col>
                </Row>
              </Col>
            </Row>
          ))}
        </Jumbotron>
      </div>
    );
  }
}

export default Checking;
