import React from 'react'
import '../main/Main.css'
import Task from './task/Task'
const Main = (props) => {
    return props.state.getState().map(task => (
        <Task key={task.id} props={task} 
        title={props.state}
        changeTaskState={props.changeTaskState} 
        changeTextState={props.changeTextState} 
        taskState={props.taskState} 
        delTask={props.delTask}
        editTitle={props.editTitle}
        />
    ));
}

export default Main;
