import React, { Component } from "react";
import ReactMapboxGl, { ZoomControl, Layer, Feature } from "react-mapbox-gl";
import DrawControl from "react-mapbox-gl-draw";

import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiaXJpc2QiLCJhIjoiY2o4OXp1cTFyMDhhNjJxcGl2Y2ticDdhayJ9.p6Gc-F2ylzEMfBN0XJSfeQ",
  minZoom: 2,
  maxZoom: 7,
  zoom: [4]
});

class WebMap extends Component {
  render() {
    return (
      <Map
        style="mapbox://styles/irisd/cj8mzhg4u7c5k2rojd7r8iuw3"
        containerStyle={{
          height: "100vh",
          width: "100%"
        }}
        center={[19.2593642, 42.4304196]}
      >
        <ZoomControl position="top-left" />
        <DrawControl />
      </Map>
    );
  }
}

export default WebMap;
