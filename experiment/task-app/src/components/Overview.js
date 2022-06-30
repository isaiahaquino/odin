import React from "react";

const Overview = (props) => {
    const { tasks } = props;

    return (
        <ul>
            {tasks.map((task) => {
                console.log(task.id)
                return <li key={task.id}>{task.text}</li>;
            })}
        </ul>
    )
}

export default Overview;