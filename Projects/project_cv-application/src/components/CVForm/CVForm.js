import React, { Component } from "react";
import Personal from './Personal'
import Experience from './Experience'
import Education from './Education'

class CVForm extends Component {
    render() {
        const { cv, loadExample, loadReset, handleChangePersonal } = this.props;

        return (
            <div>
                <form>
                    <label>Personal Information</label>
                    <Personal 
                        cv = { cv }
                        handleChange = { handleChangePersonal }
                    />
                    <label>Experience</label>
                    <Experience />
                    <label>Education</label>
                    <Education />
                </form>
                <button type="button" onClick={loadExample}>Load Example</button>
                <button type="button" onClick={loadReset}>Reset</button>
            </div>
        );
    }
}

export default CVForm;