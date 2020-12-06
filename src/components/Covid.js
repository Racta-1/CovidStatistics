import React, { Component } from 'react';
import { Form, Button, Row, Col, Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import covid19 from '../images/covid19.png';
import axios from 'axios';

class Covid extends Component {
  state = {
    country: '',
    info: [],
  };

  // updateCountry = (country) => {
  //   const data = {
  //     'x-rapidapi-key': '8c896413c0msh5b94573c829464ep19e019jsnb748311900da',
  //     'x-rapidapi-host': 'covid-193.p.rapidapi.com',
  //   };
  //   axios
  //     .get(`https://covid-193.p.rapidapi.com/statistics?country=${country}`, {
  //       headers: data,
  //     })
  //     .then((response) => {
  //       this.setState({
  //         info: response.data,
  //       });

  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  componentDidMount() {
    const data = {
      'x-rapidapi-key': '8c896413c0msh5b94573c829464ep19e019jsnb748311900da',
      'x-rapidapi-host': 'covid-193.p.rapidapi.com',
    };
    axios
      .get(`https://covid-193.p.rapidapi.com/statistics?country=usa`, {
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

  // updateData = (country, info) => {
  //   const capitalCountry = country.charAt(0).toUpperCase() + country.slice(1);
  //   // console.log(this.state.info);
  //   return (
  //     <Jumbotron className="mt-5 bg-white shadow">
  //       <Row>
  //         <Col sm={6}>
  //           <h1 className="mb-5">Country</h1>
  //           <h2>
  //             <span>{capitalCountry}</span>
  //           </h2>
  //         </Col>
  //         <Col sm={6}>
  //           <h1 className="mb-5">Cases</h1>
  //           <Row>
  //             <Col>
  //               <h4>
  //                 Active :<span></span>
  //                 {/* {info.cases.active} */}
  //               </h4>
  //               <hr />
  //               <h4>
  //                 Critical :<span></span>
  //                 {/* {info.cases.critical} */}
  //               </h4>
  //               <hr />
  //               <h4>
  //                 New :<span></span>
  //                 {/* {info.cases.new} */}
  //               </h4>
  //               <hr />
  //               <h4>
  //                 Recovered :<span></span>
  //                 {/* {info.cases.recovered} */}
  //               </h4>
  //               <hr />
  //               <h2 className="text-right">
  //                 Total :<span></span>
  //                 {/* {info.cases.total} */}
  //               </h2>
  //             </Col>
  //           </Row>
  //         </Col>
  //       </Row>
  //     </Jumbotron>
  //   );
  // };

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    // this.updateCountry(this.state.country);
    // this.updateData(this.state.country, this.state.info);
    // console.log(this.state.info);
  };

  render() {
    const { country, info } = this.state;
    // const capitalCountry = country.charAt(0).toUpperCase() + country.slice(1);
    console.log(info);
    // info.map((req) => console.log(req));
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
            <Col sm={{ span: 7, offset: 2 }}>
              <input
                className="form-control form-control-lg"
                onChange={this.onInputChange}
                name="country"
                type="text"
                placeholder="Search Country"
                value={country}
              />
            </Col>
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
                    <small className="bg-primary text-50 text-white font-weight-bold p-2 rounded">
                      Population:
                      <span className="ml-5">
                        {req.population
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                      </span>
                    </small>
                    <hr />
                    <h4>
                      Active :{' '}
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
                        {req.cases.new
                          .substring(1)
                          .toString()
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

export default Covid;
