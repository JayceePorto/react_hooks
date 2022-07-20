const Task = ({key, content, done, handleTaskDoneToggle}) => {
    return (
        <div>
            <h6>{content}</h6>
            <input 
                type="checkbox" 
                name="done" 
                id={key} 
                checked={done} 
                onChange={(event) => handleTaskDoneToggle(event.target.id)}/>
        </div>
    )
}

export default Task;