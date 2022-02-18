import './AddTodo.css'
import { useState } from 'react'
const MyTodo = ({todo, ondelete}) => {

    
    return (
      <div className="container">
        <h4>{todo.title}</h4>
        <h6>{todo.desc}</h6>
        <div className="row">
          <button className="delete" onClick={()=>{ondelete(todo)}}>
            Delete
          </button>
        </div>
      </div>
    );
  };

export default MyTodo;