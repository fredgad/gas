import React from 'react'
import './Edit.css'

const Edit = (props) => {
    // debugger;
    let {editCheck,checkId} = props.title;
    let hideClass = (editCheck == '1' && checkId == props.id) ? ' HideEdit' : ' FlexEdit';
    // console.log(editCheck && checkId == props.id)
    // console.log(checkId + ' : ' + props.id)
    return (
        <div className="EditSet" >
            <input type="text" className="TextExchange"></input>
            <button className="improve"
              onClick={props.changeTextState.bind(this, props.id)}>Improve
            </button>
            <button className="cansel">Cansel</button>
        </div>
    );
}

export default Edit;