import React, { Component } from "react";

class CVPreview extends Component {
    
    render() {
        const { personalInfo, education, experience } = this.props.cv;

        return (
            <div className="preview">
                <div className="prevPersonal">
                    <div className="personalMain">
                        <h1>{personalInfo.firstName} {personalInfo.lastName}</h1>
                        <h2>{personalInfo.title}</h2>
                        <p>{personalInfo.description}</p>
                    </div>
                    <div className="personalDetails">
                        <h3>Personal Details</h3>
                        <p>{personalInfo.address}</p>
                        <p>{personalInfo.phoneNumber}</p>
                        <p>{personalInfo.email}</p>
                    </div>
                </div>

                <div className="prevEducation">
                
                </div>

                <div className="prevExperience">

                </div>
            </div>
        );
    }
}

export default CVPreview;