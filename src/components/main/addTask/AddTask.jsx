import React from 'react'
import '../task/Task.css'

const AddTask = (props) => {
    return (
        <form onSubmit={props.submitTask}>
            <input type="text"
                name="title"
                placeholder="Text here..." 
                onChange={props.tiping}
                className="btn"  /> 
            <input type="submit"
                value="submit" />
        </form>
    );
}

export default AddTask;