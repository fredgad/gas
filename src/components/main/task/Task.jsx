import React from 'react'
import '../task/Task.css'
import Edit from './edit/Edit'

const Task = (props) => {
  // debugger;
  let {editCheck,checkId} = props.title.getTitle();
  const {id, title, completed} = props.props,
        check = completed ? 'checked' : ''
  let hideClass = (editCheck == '1' && checkId == props.id) ? ' HideEdit' : ' FlexEdit';
        console.log(hideClass)
  return (
    <div className="Task">
      <input type="checkbox" 
        onChange={props.changeTaskState.bind(this, id)} 
        checked={check} />
      <div className={"TaskText" + hideClass} 
        style={props.taskState(completed)}>
          { title }
      </div>
      <Edit className={hideClass} props={title} title={props.title.getTitle()} changeTextState={props.changeTextState} id={id}/>
      <div className="TaskEdit" data-id={id}
        onClick={props.editTitle}>Edit
      </div>
      <div className="TaskDelete" onClick={props.delTask.bind(this, id)}>X</div>
    </div>
  );
}

export default Task;