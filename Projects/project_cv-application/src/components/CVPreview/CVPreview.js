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
                    <h1>Education</h1>
                    {education.map((edu) => {
                        const form = edu.form;
                        return (
                            <div key={edu.id} id={edu.id}>
                                <h1>{form.name}, {form.city}</h1>
                                <h2>{form.start} - {form.end}</h2>
                                <p>{form.degree}</p>
                                <p>{form.subject}</p>
                            </div>
                        );
                    })}
                </div>

                <div className="prevExperience">
                    <h1>Experience</h1>
                    {experience.map((exp) => {
                        const form = exp.form;
                        return (
                            <div key={exp.id} id={exp.id}>
                                <h1>{form.position}</h1>
                                <h2>{form.start} - {form.end}</h2>
                                <p>{form.company}, {form.city}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default CVPreview;