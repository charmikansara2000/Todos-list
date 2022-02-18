import { useState } from 'react';
import './AddTodo.css'

const AddTodo = (props) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submitHandler = (e)=>{
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        }
        else {
        console.log("I am adding this todo.", title, desc)
        props.addTodo(title, desc)
        setDesc("")
        setTitle("")
        }
    }
    return (
        <div className='container'>
            <h4>Add your To-do here!</h4>
        <form onSubmit={submitHandler}>

            <div className='row'>
                <div className="col-25">
                    <label htmlFor="fname">Title</label>
                </div>
                <div className="col-75">
                    <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Your title.." />
                </div>
            </div>
            <div className="row">
                <div className="col-25">
                    <label htmlFor="lname">Description</label>
                </div>
                <div className="col-75">
                    <input type="text" id="description" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Description.." />
                </div>
            </div>
            <div className="row">
                <input type="submit" value="Submit" />
            </div>
        </form>
        </div>
    )
}

export default AddTodo;