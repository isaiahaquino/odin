import React, { Component } from "react";

class Personal extends Component {
    render() {
        const { cv, handleChange } = this.props;

        return (
            <div className="form">
                <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} value={cv.personalInfo.firstName}></input>
                <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} value={cv.personalInfo.lastName}></input>
                <input type="text" name="title" placeholder="Title" onChange={handleChange} value={cv.personalInfo.title}></input>
                <input type="text" name="address" placeholder="Address" onChange={handleChange} value={cv.personalInfo.address}></input>
                <input type="text" name="phoneNumber" placeholder="Phone number" onChange={handleChange} value={cv.personalInfo.phoneNumber}></input>
                <input type="text" name="email" placeholder="Email" onChange={handleChange} value={cv.personalInfo.email}></input>
                <input type="text" name="description" placeholder="Description" onChange={handleChange} value={cv.personalInfo.description}></input>
            </div>
        );
    }
}

export default Personal;