

import React from 'react';
import mapboxgl from 'mapbox-gl';
import "../Styles/Map.css";
import Navigation from '../Navigation';

mapboxgl.accessToken = 'pk.eyJ1IjoiYnF1YWNrZW5idXNoIiwiYSI6ImNrN2NyMWZ1NTBocHIzZm15ajIyeDh6bjQifQ.XvrPc_WB0_PCWnE37pU4bQ';

class MapMarker extends React.Component {

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.lastEarthquake !== this.props.lastEarthquake) {
      console.log("state has changed and working")
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
  }

  render() {
    return (
      <div>
        <Navigation />
        <div className='container'>
        <div className='sidebarStyle'>
          <div className='longitude'>Latest Earth Quake | Longitude: {this.props.lastEarthquake.lon} | Latitude: {this.props.lastEarthquake.lat} | Place: {this.props.lastEarthquake.place}</div>
        </div>
        <div ref={el => this.mapContainer = el} className='mapContainer' />
        </div>
      </div>
    )
  }
}


export default MapMarker