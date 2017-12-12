import React, { Component } from "react";
import ReactMapboxGl from "react-mapbox-gl";

import "./styles.css";

class GeolocateControl extends Component {
  constructor(props) {
    super(props);
    this.getLocation = this.getLocation.bind(this);
  }

  getLocation() {
    const showPosition = position => {
      this.props.centerCoords([
        position.coords.longitude,
        position.coords.latitude
      ]);
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  }

  render() {
    return (
      <div className="geolocationBtn" onClick={this.getLocation}>
        Get Location
      </div>
    );
  }
}

export default GeolocateControl;
