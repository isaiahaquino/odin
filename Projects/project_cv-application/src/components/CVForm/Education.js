import React, { Component} from "react";

class Education extends Component {
    render() {
        const { cvFormEdu, removeEducationForm } = this.props;

        return (
            <>
                {cvFormEdu.map((exp) => {
                    return (
                        <div key={exp.id} id={exp.id}>
                            {exp.form}
                            <button type="button" id={exp.id} onClick={removeEducationForm}>Delete</button>
                        </div>
                    )
                })}
            </>
        )
    }
}

export default Education;