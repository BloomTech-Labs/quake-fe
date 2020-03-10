// import React, { Component } from 'react';
// import ReactMapGL, { Marker } from "react-map-gl";
// import "./MapMarker.css";

import React from 'react';
import mapboxgl from 'mapbox-gl';
import "../Styles/Map.css";
import Navigation from '../Navigation';

mapboxgl.accessToken = 'pk.eyJ1IjoiYnF1YWNrZW5idXNoIiwiYSI6ImNrN2NyMWZ1NTBocHIzZm15ajIyeDh6bjQifQ.XvrPc_WB0_PCWnE37pU4bQ';

class MapMarker extends React.Component {
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

    new mapboxgl.Marker()
        .setLngLat([5, 34])
        .addTo(map);

   
//   map.addImage('http://placekitten.com/50/50');


    map.on('move', () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
    // map.loadImage('https://upload.wikimedia.org/wikipedia/commons/8/89/Black_and_White_Boxed_%28bordered%29.png', function(error, image) {
    //     if (error) throw error;
    //     if (!map.hasImage('border-image')) {
    //       map.addImage('border-image', image, {
    //           content: [16, 16, 300, 384], // place text over left half of image, avoiding the 16px border
    //           stretchX: [[16, 584]], // stretch everything horizontally except the 16px border
    //           stretchY: [[16, 384]], // stretch everything vertically except the 16px border
    //       });
    //     }
    //  });
    

//     map.loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Cat_silhouette.svg/400px-Cat_silhouette.svg.png', function(error, image) {
//    if (error) throw error;
//    if (!map.hasImage('cat')) map.addImage('cat', image);
// });
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


export default MapMarker