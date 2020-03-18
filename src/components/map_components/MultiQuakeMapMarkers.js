import React, { Component } from "react"
import mapboxgl from "mapbox-gl";
import "../Styles/Map.css"

mapboxgl.accessToken = 'pk.eyJ1IjoiYnF1YWNrZW5idXNoIiwiYSI6ImNrN2NyMWZ1NTBocHIzZm15ajIyeDh6bjQifQ.XvrPc_WB0_PCWnE37pU4bQ';




class MultiQuakeMapMarkers extends React.Component {
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.multiQuake !== this.props.multiQuake) {
           
            const map = new mapboxgl.Map({
                container: this.mapContainer,
                style: 'mapbox://styles/mapbox/streets-v11',
                zoom: 3,
                center: [-111.8910, 40.7608]

            })
            
            const quakes = this.props.multiQuake

            quakes.map(quake => new mapboxgl.Marker()
                .setLngLat([quake.lon, quake.lat])
                .addTo(map)
            )

        }
    }

    




    render() {
        return(
            <div>
                <div ref={el => this.mapContainer = el} className="mapContainer" />
            </div>
        )
    }
}














export default MultiQuakeMapMarkers 