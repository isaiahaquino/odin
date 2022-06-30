import React, { Component } from 'react';
import CVForm from './CVForm/CVForm';
import CVPreview from './CVPreview/CVPreview';
import EmptyCV from './Utils/EmptyCV';
import ExampleCV from './Utils/ExampleCV';
import EmptyExp from './Utils/EmptyExp';
import emptyCV from './Utils/EmptyCV';
import ExperienceForm from './CVForm/ExperienceForm';
import uniqid from 'uniqid';

class Main extends Component {
    constructor() {
        super();

        this.state = {
            cv: EmptyCV,
            cvFormEdu: [],
            cvFormExp: [],
        }

        this.handleChangePersonal = this.handleChangePersonal.bind(this);
        this.handleChangeEducation = this.handleChangeEducation.bind(this);
        this.handleChangeExperience = this.handleChangeExperience.bind(this);
        this.addExperienceForm = this.addExperienceForm.bind(this);
        this.removeExperienceForm = this.removeExperienceForm.bind(this);
    }

    loadExample() {
        // TODO
        this.setState({
            cv: ExampleCV,
        });
    }

    loadReset() {
        // TODO
        this.setState({
            cv: EmptyCV,
        });
    }

    handleChangePersonal(e) {
        let newCV = this.state.cv;
        newCV.personalInfo[e.target.name] = e.target.value;

        this.setState({
            cv: newCV,
        })
    }

    handleChangeExperience() {
        // TODO
    }

    addExperienceForm() {
        let newForm = this.state.cvFormExp;
        let newExp = {
            form: ExperienceForm,
            id: uniqid(),
        }
        newForm = newForm.concat(newExp);
        this.setState({
            cvFormExp: newForm,
        })
    }

    removeExperienceForm(e) {
        let newForm = this.state.cvFormExp;
        console.log(newForm)
        console.log(`Deleting: ${e.target.key}`)
        newForm = newForm.filter(exp => exp.id != e.target.key)
        this.setState({
            cvFormExp: newForm,
        })
        console.log(newForm)
    }

    handleChangeEducation() {
        // TODO


    }



    render() {
        const { cv, cvFormEdu, cvFormExp } = this.state;

        return (
            <div className='mainContainer'>
                <CVForm 
                    cv={cv}
                    cvFormEdu={cvFormEdu}
                    cvFormExp={cvFormExp}
                    handleChangePersonal={this.handleChangePersonal}
                    addExperienceForm={this.addExperienceForm}
                    removeExperienceForm={this.removeExperienceForm}
                    loadExample={this.loadExample}
                    loadReset={this.loadReset}
                />
                <CVPreview 
                    cv = {cv}
                />
            </div>
        );
    }
}

export default Main;