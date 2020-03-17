import React, { Component } from "react"
import axios from "axios";


class MultiQuakeMap extends Component {
    constructor(props) {
        super(props);
        this.state = {

            quakes: {},
            inputBox: "hour"

        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }


    handleSubmit = event => {
       event.preventDefault();
       const proxy = "https://cors-anywhere.herokuapp.com/";
       const url = `https://quake-ds-production.herokuapp.com/lastQuake/last/${this.inputBox}` 

       axios.get(proxy + url)
            .then(res => {
                this.setState({
                    quakes: res.data.message
                })
                console.log(this.state.quakes, "Successfully set quakes to state")
            })
            .catch(err => console.log(err, "Unsuccessfully set quakes to state"))
        
    }

    handleInputChange(event) {
        this.setState({
            inputBox: event.target.value
        })
    }





    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Filter by hour, day, week, or month</label>
                    <input 
                        type="text"
                        value={this.state.inputBox}
                        onChange={this.handleInputChange} 
                    />
                    <input 
                        type="submit"
                        value="Submit"
                    
                    />
                        
                    


                </form>
            </div>
        )
    }

}

export default MultiQuakeMap;