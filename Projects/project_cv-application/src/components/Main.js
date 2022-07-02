import React, { Component } from 'react';
import CVForm from './CVForm/CVForm';
import CVPreview from './CVPreview/CVPreview';
import EmptyCV from './Utils/EmptyCV';
import ExampleCV from './Utils/ExampleCV';
import EmptyExp from './Utils/EmptyExp';
import EmptyEdu from './Utils/EmptyEdu';
import ExperienceForm from './CVForm/ExperienceForm';
import EducationForm from './CVForm/EducationForm';
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
        this.addEducationForm = this.addEducationForm.bind(this);
        this.removeExperienceForm = this.removeExperienceForm.bind(this);
        this.removeEducationForm = this.removeEducationForm.bind(this);
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

    handleChangeExperience(e) {
        // TODO
        let newCV = this.state.cv;
        const education = newCV.education.map((edu) => {
            
        })
    }

    addExperienceForm() {
        const expForm =  { form: ExperienceForm, id: uniqid(), };
        let newCV = this.state.cv;
        let newExp = EmptyExp;
        newExp.id = expForm.id;
        newCV.experience.push(newExp);
        this.setState({
            cvFormExp: this.state.cvFormExp.concat(expForm),
            cv: newCV,
        })
    }

    removeExperienceForm(e) {
        this.setState({
            cvFormExp: this.state.cvFormExp.filter(exp => exp.id !== e.target.id),
        })
    }

    handleChangeEducation() {
        // TODO

    }

    addEducationForm() {
        const eduForm = { form: EducationForm, id: uniqid() };
        let newCV = this.state.cv;
        let newExp = EmptyEdu;
        newExp.id = eduForm.id;
        newCV.education.push(newExp);
        this.setState({
            cvFormEdu: this.state.cvFormEdu.concat(eduForm),
            cv: newCV,
        })
    }

    removeEducationForm(e) {
        this.setState({
            cvFormEdu: this.state.cvFormEdu.filter(exp => exp.id !== e.target.id),
        })
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
                    addEducationForm={this.addEducationForm}
                    removeExperienceForm={this.removeExperienceForm}
                    removeEducationForm={this.removeEducationForm}
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