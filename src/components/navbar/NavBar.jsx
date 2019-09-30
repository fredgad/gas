import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import AddTask from '../main/addTask/AddTask'

const NavBar = (props)=> {
    return (
    <nav className={s.nav}>
      <div>
        <div className={s.item}>
          <NavLink to='/Preview' activeClassName={s.active}>Preview</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/Main' activeClassName={s.active}>Main</NavLink>
        </div>
      </div>
      <AddTask 
        props={props.state}
        tiping={props.tiping}
        submitTask={props.submitTask} />
    </nav>
    );
}
    
export default NavBar;