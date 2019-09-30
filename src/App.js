import React from 'react'
import './App.css'
import { Route } from 'react-router-dom';
import Main from './components/main/Main'
import Header from './components/header/Header'
import NavBar from './components/navbar/NavBar'
import Preview from './components/main/Preview'

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <NavBar state={props.store.getTitle()} 
        tiping={props.store.tiping} 
        submitTask={props.store.submitTask} />
      <div className="app-wrapper-content">
        <Route path='/Main' render={() => <Main
          state={props.store} 
          changeTaskState={props.store.changeTaskState} 
          changeTextState={props.store.changeTextState}
          taskState={props.store.taskState} 
          delTask={props.store.delTask} 
          editTitle={props.store.editTitle} />} />

        <Route path='/Preview' render={() => <Preview />} />
      </div>
    </div>
  );
}

export default App;
