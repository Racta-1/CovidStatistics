import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class Country extends Component {
  state = {
    country: [],
  };

  componentDidMount() {
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
        // console.log(this.state.country);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  onInputChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  render() {
    const { country } = this.state;
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
  }
}

export default Country;
