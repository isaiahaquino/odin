import React, { Component } from 'react';
import CVForm from './CVForm/CVForm';
import CVPreview from './CVPreview/CVPreview';
import emptyCV from './Utils/emptyCV';
import exampleCV from './Utils/exampleCV';

class Main extends Component {
    constructor() {
        super();

        this.state = {
            cv: emptyCV,
        }

        this.handleChangePersonal = this.handleChangePersonal.bind(this);
        this.handleChangeEducation = this.handleChangeEducation.bind(this);
        this.handleChangeExperience = this.handleChangeExperience.bind(this);
    }

    loadExample() {
        // TODO
        this.setState({
            cv: exampleCV,
        });
    }

    loadReset() {
        // TODO
        this.setState({
            cv: emptyCV,
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

    handleChangeEducation() {
        // TODO


    }

    


    
    render() {
        const { cv } = this.state;

        return (
            <div className='mainContainer'>
                <CVForm 
                    cv={cv}
                    handleChangePersonal={this.handleChangePersonal}
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