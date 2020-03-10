

import React from 'react';
import mapboxgl from 'mapbox-gl';
import "../Styles/Map.css";
import Navigation from '../Navigation';

mapboxgl.accessToken = 'pk.eyJ1IjoiYnF1YWNrZW5idXNoIiwiYSI6ImNrN2NyMWZ1NTBocHIzZm15ajIyeDh6bjQifQ.XvrPc_WB0_PCWnE37pU4bQ';

class MapMarker extends React.Component {
  

  componentDidMount(props) {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.props.lastEarthquake.lon, this.props.lastEarthquake.lat],
      zoom: this.props.lastEarthquake.zoom
      
    });
    console.log(this.props.lastEarthquake.lon)

    new mapboxgl.Marker()
        .setLngLat([this.props.lastEarthquake.lon, this.props.lastEarthquake.lat])
        .addTo(map);

   
  }

  render() {
    return (
      <div>
        <Navigation />
        <div >
         
        </div>
        <div ref={el => this.mapContainer = el} className='mapContainer' />
      </div>
    )
  }
}


export default MapMarker