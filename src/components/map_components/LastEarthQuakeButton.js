import React, { Component } from "react"
import axios from "axios";

import MapMarker from "./MapMarker.js"



class LastEarthQuakeButton extends Component {
    constructor(props) {
        super(props);
        this.state = { 
                oceanic: false,
                id: [],
                lat: [],
                lon: [],
                mag: [],
                place: [],
                time: [],
                marker: false,
                zoom: 2
            }
        
        
        
        }

        componentDidMount() {
            const proxy = "https://cors-anywhere.herokuapp.com/";
            const url = "https://quake-ds-production.herokuapp.com/lastQuake"
            
            axios.get(proxy + url)
                .then(res => {
                    console.log(res.data)
                    this.setState({
                        oceanic: res.data.message.oceanic,
                        id: res.data.message.id,
                        lat: res.data.message.lat,
                        lon: res.data.message.lon,
                        mag: res.data.message.mag,
                        place: res.data.message.place,
                        time: res.data.message.time
                    })
                    console.log(res, this.state)
                    
                })
                .catch(err => console.log(err, "It didn't work"))

            
                
                
        }
        
        

        render() {
            return (
                <div>
                   <MapMarker lastEarthquake={this.state}/>
                </div>
            )
        }

} 

export default LastEarthQuakeButton;

    
