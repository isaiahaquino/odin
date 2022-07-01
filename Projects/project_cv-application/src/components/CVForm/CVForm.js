import React, { Component } from "react";
import Personal from './Personal'
import Experience from './Experience'
import Education from './Education'

class CVForm extends Component {
    render() {
        const { 
            cv, 
            cvFormExp, 
            cvFormEdu,
            loadExample, 
            loadReset, 
            handleChangePersonal, 
            addExperienceForm, 
            addEducationForm,
            removeExperienceForm,
            removeEducationForm,
        } = this.props;

        return (
            <div>
                <form>
                    <label>Personal Information</label>
                    <Personal 
                        cv={cv}
                        handleChange={handleChangePersonal}
                    />

                    <label>Experience</label>
                    <Experience 
                        cvFormExp={cvFormExp}
                        removeExperienceForm={removeExperienceForm}
                    />
                    <button type="button" onClick={addExperienceForm}>Add</button>

                    <label>Education</label>
                    <Education 
                        cvFormEdu={cvFormEdu}
                        removeEducationForm={removeEducationForm}
                    />
                    <button type="button" onClick={addEducationForm}>Add</button>
                </form>

                <button type="button" onClick={loadExample}>Load Example</button>
                <button type="button" onClick={loadReset}>Reset</button>
            </div>
        );
    }
}

export default CVForm;