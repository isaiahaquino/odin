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
            eduForm: {
                form: ExperienceForm,
                id: uniqid(),
            },
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
        this.setState({
            cvFormExp: this.state.cvFormExp.concat(this.state.eduForm),
            eduForm: {
                form: ExperienceForm,
                id: uniqid(),
            },
        })
    }

    removeExperienceForm(e) {
        let newForm = this.state.cvFormExp;
        newForm = newForm.filter(exp => exp.id != e.target.id)
        this.setState({
            cvFormExp: newForm,
        })
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