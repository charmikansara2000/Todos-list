import './AddTodo.css'
import { useState } from 'react'
const MyTodo = (props) => {

    
    return (
      <div className="container">
        <h4>{props.todo.title}</h4>
        <h6>{props.todo.desc}</h6>
        <div className="row">
          <button className="delete" onClick={props.ondelete}>
            Delete
          </button>
        </div>
      </div>
    );
  };

export default MyTodo;