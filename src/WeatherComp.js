import React, {
  Component
} from 'react';
import $ from 'jquery';
import * as Service from './service.js'

class WeatherComp extends Component {
  constructor(props, context) {
    super(props, context)
    this.getSuccess = this.getSuccess.bind(this)
    this.state = {
      data: {},
      iconURL: '',
      description: '',
      wind: '',
      temp: '',
      humidity: '',
      city: '',
      country: ''
    }

  }

  getSuccess(data) {
    //console.log(data)
    let icon_url = Service.API_ICON_URL + data.weather[0].icon + '.png'
    this.setState({
      data: data.main,
      iconURL: icon_url,
      description: data.weather[0].description,
      wind: data.wind,
      temp: data.main.temp,
      humidity: data.main.humidity,
      city: data.name,
      country: data.sys.country
    }, function() {});
  }

  componentWillMount() {
    var self = this
    const API_KEY = Service.API_KEY
    const API_ENDPOINT = Service.API_ENDPOINT
    $.get(Service.API_LOCATION_ENDPOINT, function(response) {}, "jsonp").done(function(response) {
      //console.log(response)
      let loc = response.loc.split(',');
      let lat = loc[0]
      let lon = loc[1]
      //by location
      var url = API_ENDPOINT + API_KEY + '&units=imperial&lat=' + lat + '&lon=' + lon;
      $.get(url, function(data) {}).done(function(data) {
        self.getSuccess(data)
      }).fail(function() {});
    });
  }

  render() {
    return (
      <div className="container">
                <div className="row">Current Weather </div>
  		          <div className="row">
  		            <div className="col-sm-2">
  		             <img alt='weather icon' src={this.state.iconURL} />
  		            </div>
                  <div className="col-sm-6">
                    <ul>
                    <li>City: {this.state.city.toUpperCase()}, {this.state.country.toUpperCase()}</li>
                    <li>{this.state.description.toUpperCase()}</li>
                    <li>Temperature: {this.state.temp}</li>
                    <li>Wind: <ul><li>Direction: {this.state.wind.deg}</li><li>Speed: {this.state.wind.speed}</li></ul></li>
                    <li>Humidity: {this.state.humidity}</li>
                  </ul>
                </div>
  		          </div>
  		        </div>
    );
  }
}

export default WeatherComp;
