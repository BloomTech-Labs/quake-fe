import React, { Component } from "react";
import Geocoder from "react-mapbox-gl-geocoder";

const queryTypes = {
  types: "country,region,place,postcode,locality,neighborhood",
};
console.log(process.env.REACT_APP_MAP_API_TOKEN);

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
          mapboxApiAccessToken={process.env.REACT_APP_MAP_API_TOKEN}
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
