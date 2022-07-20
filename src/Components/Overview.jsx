import React from "react";
import Task from './Task.jsx';

const Overview = ({ tasks, handleTaskDoneToggle, handleResetTaskList }) => {
    return (
        <section>
            <h3>Tasks</h3>
            <button onClick={handleResetTaskList}>Clear All</button>
            {tasks.map((value, index) => {
                return <Task 
                    key={index + value.content} 
                    content={value.content} 
                    done={value.done} 
                    handleTaskDoneToggle={handleTaskDoneToggle}/>;
                })}
        </section>
    );
};

export default Overview;