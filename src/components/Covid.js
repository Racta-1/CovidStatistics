import React, { Component } from 'react';
import { Form, Button, Row, Col, Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import covid19 from '../images/covid19.png';
import axios from 'axios';

class Covid extends Component {
  state = {
    info: [],
    country: [
      'All',
      'Afghanistan',
      'Africa',
      'Albania',
      'Algeria',
      'Andorra',
      'Angola',
      'Anguilla',
      'Antigua-and-Barbuda',
      'Argentina',
      'Armenia',
      'Aruba',
      'Asia',
      'Australia',
      'Austria',
      'Azerbaijan',
      'Bahamas',
      'Bahrain',
      'Bangladesh',
      'Barbados',
      'Belarus',
      'Belgium',
      'Belize',
      'Benin',
      'Bermuda',
      'Bhutan',
      'Bolivia',
      'Bosnia-and-Herzegovina',
      'Botswana',
      'Brazil',
      'British-Virgin-Islands',
      'Brunei-',
      'Bulgaria',
      'Burkina-Faso',
      'Burundi',
      'Cabo-Verde',
      'Cambodia',
      'Cameroon',
      'Canada',
      'CAR',
      'Caribbean-Netherlands',
      'Cayman-Islands',
      'Chad',
      'Channel-Islands',
      'Chile',
      'China',
      'Colombia',
      'Comoros',
      'Congo',
      'Costa-Rica',
      'Croatia',
      'Cuba',
      'Cura&ccedil;ao',
      'Cyprus',
      'Czechia',
      'Denmark',
      'Diamond-Princess',
      'Diamond-Princess-',
      'Djibouti',
      'Dominica',
      'Dominican-Republic',
      'DRC',
      'Ecuador',
      'Egypt',
      'El-Salvador',
      'Equatorial-Guinea',
      'Eritrea',
      'Estonia',
      'Eswatini',
      'Ethiopia',
      'Europe',
      'Faeroe-Islands',
      'Falkland-Islands',
      'Fiji',
      'Finland',
      'France',
      'French-Guiana',
      'French-Polynesia',
      'Gabon',
      'Gambia',
      'Georgia',
      'Germany',
      'Ghana',
      'Gibraltar',
      'Greece',
      'Greenland',
      'Grenada',
      'Guadeloupe',
      'Guam',
      'Guatemala',
      'Guinea',
      'Guinea-Bissau',
      'Guyana',
      'Haiti',
      'Honduras',
      'Hong-Kong',
      'Hungary',
      'Iceland',
      'India',
      'Indonesia',
      'Iran',
      'Iraq',
      'Ireland',
      'Isle-of-Man',
      'Israel',
      'Italy',
      'Ivory-Coast',
      'Jamaica',
      'Japan',
      'Jordan',
      'Kazakhstan',
      'Kenya',
      'Kuwait',
      'Kyrgyzstan',
      'Laos',
      'Latvia',
      'Lebanon',
      'Lesotho',
      'Liberia',
      'Libya',
      'Liechtenstein',
      'Lithuania',
      'Luxembourg',
      'Macao',
      'Madagascar',
      'Malawi',
      'Malaysia',
      'Maldives',
      'Mali',
      'Malta',
      'Martinique',
      'Mauritania',
      'Mauritius',
      'Mayotte',
      'Mexico',
      'Moldova',
      'Monaco',
      'Mongolia',
      'Montenegro',
      'Montserrat',
      'Morocco',
      'Mozambique',
      'MS-Zaandam',
      'MS-Zaandam-',
      'Myanmar',
      'Namibia',
      'Nepal',
      'Netherlands',
      'New-Caledonia',
      'New-Zealand',
      'Nicaragua',
      'Niger',
      'Nigeria',
      'North-America',
      'North-Macedonia',
      'Norway',
      'Oman',
      'Oceania',
      'Pakistan',
      'Palestine',
      'Panama',
      'Papua-New-Guinea',
      'Paraguay',
      'Peru',
      'Philippines',
      'Poland',
      'Portugal',
      'Puerto-Rico',
      'Qatar',
      'R&eacute;union',
      'Romania',
      'Russia',
      'Rwanda',
      'S.-Korea',
      'Saint-Kitts-and-Nevis',
      'Saint-Lucia',
      'Saint-Martin',
      'Saint-Pierre-Miquelon',
      'San-Marino',
      'Sao-Tome-and-Principe',
      'Saudi-Arabia',
      'Senegal',
      'Serbia',
      'Seychelles',
      'Sierra-Leone',
      'Singapore',
      'Sint-Maarten',
      'Slovakia',
      'Slovenia',
      'Somalia',
      'South-Africa',
      'South-America',
      'South-Sudan',
      'Spain',
      'Sri-Lanka',
      'St.-Barth',
      'St.-Vincent-Grenadines',
      'Sudan',
      'Suriname',
      'Sweden',
      'Switzerland',
      'Syria',
      'Taiwan',
      'Tajikistan',
      'Tanzania',
      'Thailand',
      'Timor-Leste',
      'Togo',
      'Trinidad-and-Tobago',
      'Tunisia',
      'Turkey',
      'Turks-and-Caicos',
      'U.S.-Virgin-Islands',
      'UAE',
      'Uganda',
      'UK',
      'Ukraine',
      'Uruguay',
      'USA',
      'Uzbekistan',
      'Vatican-City',
      'Venezuela',
      'Vietnam',
      'Western-Sahara',
      'Yemen',
      'Zambia',
      'Zimbabwe',
    ],
    selectedCountry: null,
  };

  onInputChange = (e) => {
    this.setState({
      selectedCountry: e.target.value,
    });
  };

  listData = () => {
    const { selectedCountry } = this.state;
    const data = {
      'x-rapidapi-key': '8c896413c0msh5b94573c829464ep19e019jsnb748311900da',
      'x-rapidapi-host': 'covid-193.p.rapidapi.com',
    };
    axios
      .get(
        `https://covid-193.p.rapidapi.com/statistics?country=${selectedCountry}`,
        {
          headers: data,
        }
      )
      .then((response) => {
        this.setState({
          info: response.data.response,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.listData();
  };

  render() {
    const { info, country } = this.state;
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
            </Col>
            <Col sm={3} className="mx-auto">
              <Button className="btn-lg" type="submit">
                Check
              </Button>
            </Col>
          </Form.Group>
        </Form>
        <Jumbotron className="mt-5 bg-white shadow">
          <Row>
            <Col sm={6}>
              <h1 className="mb-5 p-3 bg-back text-white text-center rounded shadow">
                Country
              </h1>
            </Col>
            <Col sm={6}>
              <h1 className="mb-5 p-3 bg-back text-white text-center rounded shadow">
                Cases
              </h1>
            </Col>
          </Row>
          {info.map((req) => (
            <Row key={req.country}>
              <Col sm={6}>
                <h2 className="mt-5 mb-5 p-5 bg-primary text-white text-center display-2 rounded shadow">
                  <span>{req.country}</span>
                </h2>
              </Col>
              <Col sm={6}>
                <Row>
                  <Col>
                    <small className="bg-primary text-white font-weight-bold p-2 rounded">
                      Population:
                      <span className="ml-5">
                        {req.population == null
                          ? (req.population = 0)
                          : req.population
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                      </span>
                    </small>
                    <hr />
                    <h4>
                      Active :
                      <span className="ml-5">
                        {req.cases.active == null
                          ? (req.cases.active = 0)
                          : req.cases.active
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                      </span>
                    </h4>
                    <hr />
                    <h4>
                      Critical :
                      <span className="ml-5">
                        {req.cases.critical == null
                          ? (req.cases.critical = 0)
                          : req.cases.critical
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
                        {req.cases.recovered == null
                          ? (req.cases.recovered = 0)
                          : req.cases.recovered
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                      </span>
                    </h4>
                    <hr />
                    <h4>
                      Deaths :
                      <span className="ml-5">
                        {req.deaths.total == null
                          ? (req.deaths.total = 0)
                          : req.deaths.total
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
