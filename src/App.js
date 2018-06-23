import React, {Component} from 'react';
import './App.css';
import WeatherComp from './WeatherComp.js';


class App extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = { }
  }

  render() {
    return (
      <div className="container-fluid">
  		    <div className="row">
  		      <div className="col-sm-3"></div>
  		      <div className="col-sm-4" style={{ marginTop: 10, fontWeight: 'bold'}}>Weather App</div>
  		    </div>
  		    <div className="row">
  		      <div className="col-sm-2"></div>
  		      <div className="col-sm-8">
  		        <hr style={{borderBottomColor: 'black', borderBottomWidth: 1, size: '100%'}} className="col-lg-12" />
  		      </div>
  		    </div>
  		    <div className="row">
  		      <div className="col-sm-3"></div>
  		      <div className="col-sm-4">

                <WeatherComp />

  		      </div>
  		      <div className="col-sm-4"></div>
  		    </div>
  		    <div className="row">
  		      <div className="col-sm-2"></div>
  					<div className="col-sm-8">
  		        <hr style={{borderBottomColor: 'black', borderBottomWidth: 1, size: '100%'}} className="col-lg-12" />
  		      </div>
  		    </div>
  		  </div>);
  }
}

export default App;
