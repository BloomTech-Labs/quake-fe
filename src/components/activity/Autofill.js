import React, { Component } from "react";
import Geocoder from "react-mapbox-gl-geocoder";

const mapAccess = {
  mapboxApiAccessToken:
    "pk.eyJ1IjoiZWRkaWVqZGV2IiwiYSI6ImNrYWoxNmllODA3c3Iyd2xlY25qMWdqZTcifQ.qwSgQ-5q7jNjy2XWojuwwg",
};

const queryTypes = {
  types: "country,region,place,postcode,locality,neighborhood",
};

class SearchBar extends Component {
  state = {
    viewport: {},
  };

  onSelected = (viewport, item) => {
    this.setState({ viewport });
    console.log("Selected: ", item);
  };

  render() {
    const { viewport } = this.state;

    return (
      <div>
        <Geocoder
          {...mapAccess}
          onSelected={this.onSelected}
          viewport={viewport}
          hideOnSelect={true}
          types={queryTypes}
          autocomplete={true}
        />
      </div>
    );
  }
}

export default SearchBar;
