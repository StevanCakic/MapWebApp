import React, { Component } from "react";
import ReactMapboxGl, { ZoomControl } from "react-mapbox-gl";
import DrawControl from "react-mapbox-gl-draw";

import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";

import GeolocateControl from "./buttons/GeolocateControl";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiaXJpc2QiLCJhIjoiY2o4OXp1cTFyMDhhNjJxcGl2Y2ticDdhayJ9.p6Gc-F2ylzEMfBN0XJSfeQ",
  minZoom: 2,
  maxZoom: 7,
  zoom: [4]
});

class WebMap extends Component {
  constructor(props) {
    super(props);
    this.state = { center: [19.2593642, 42.4304196] };
  }

  setCenterCoords = center => {
    this.setState({ center });
  };

  render() {
    return (
      <Map
        style="mapbox://styles/irisd/cj8mzhg4u7c5k2rojd7r8iuw3"
        containerStyle={{
          height: "100vh",
          width: "100%"
        }}
        center={this.state.center}
      >
        <GeolocateControl centerCoords={this.setCenterCoords} />
        <ZoomControl position="top-left" />
        <DrawControl />
      </Map>
    );
  }
}

export default WebMap;
