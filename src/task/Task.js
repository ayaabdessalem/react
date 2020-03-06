import React from 'react';
import './task.css';

function Task(props) {
  return (
    <div className="container">
        <div className="titre">{props.title} ( {props.subtitle} )</div>
        <div className="links">
            <a href="#"> Delete</a>
            <a href="#"> Update</a>
        </div>
    </div>
  );
}

export default Task;
