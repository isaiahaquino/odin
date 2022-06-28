import React, { Component } from "react";

class Experience extends Component {
    render() {
        return (
            <div className="form">
                <input type="text" placeholder="Position"></input>
                <input type="text" placeholder="Company"></input>
                <input type="text" placeholder="City"></input>
                <input type="text" placeholder="From"></input>
                <input type="text" placeholder="To"></input>
            </div>
        )
    }
}

export default Experience;