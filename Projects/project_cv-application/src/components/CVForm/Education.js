import React, { Component} from "react";

class Education extends Component {
    render() {
        return (
            <div className="form">
                <input type="text" placeholder="University name"></input>
                <input type="text" placeholder="City"></input>
                <input type="text" placeholder="Degree"></input>
                <input type="text" placeholder="Subject"></input>
                <input type="text" placeholder="From"></input>
                <input type="text" placeholder="To"></input>
                <button type="button">Delete</button>
            </div>
        )
    }
}

export default Education;