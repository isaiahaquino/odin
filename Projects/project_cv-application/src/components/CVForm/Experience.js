import React, { Component } from "react";

class Experience extends Component {
    
    render() {
        const { cvFormExp, removeExperienceForm } = this.props;

        return (
            <>
                {cvFormExp.map((exp) => {
                    const id = exp.id.toString();
                    console.log(id)
                    return (
                        <div key={id}>
                            {exp.form}
                            <button type="button" key={id} onClick={removeExperienceForm}>Delete</button>
                        </div>
                    )
                })}
            </>
        )
    }
}

export default Experience;