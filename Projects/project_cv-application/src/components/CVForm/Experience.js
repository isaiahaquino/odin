import React, { Component } from "react";

class Experience extends Component {
    
    render() {
        const { cvFormExp, removeExperienceForm } = this.props;

        return (
            <>
                {cvFormExp.map((exp) => {
                    return (
                        <div key={exp.id} id={exp.id}>
                            {exp.form}
                            <button type="button" id={exp.id} onClick={removeExperienceForm}>Delete</button>
                        </div>
                    )
                })}
            </>
        )
    }
}

export default Experience;