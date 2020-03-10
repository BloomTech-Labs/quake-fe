import React from 'react';
import mapboxgl from 'mapbox-gl';
import "../Styles/Map.css";
import Navigation from '../Navigation';

mapboxgl.accessToken = 'pk.eyJ1IjoiYnF1YWNrZW5idXNoIiwiYSI6ImNrN2NyMWZ1NTBocHIzZm15ajIyeDh6bjQifQ.XvrPc_WB0_PCWnE37pU4bQ';

class QuakeMap extends React.Component {
  constructor(props) {
  super(props);
    this.state = {
      lng: 5,
      lat: 34,
      zoom: 2
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });

    map.on('move', () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }

  render() {
    return (
      <div>
        <Navigation />
        <div className='sidebarStyle'>
          <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
        </div>
        <div ref={el => this.mapContainer = el} className='mapContainer' />
      </div>
    )
  }
}










export default QuakeMap;