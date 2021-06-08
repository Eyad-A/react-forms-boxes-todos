import React from "react";
import "./Todo.css";

function Todo({ task = "Walk the dog", id = "1", remove}) {
    const handleDelete = () => remove(id);
   
    return (
        <div>
            <div>
                <li>{task} <button onClick={handleDelete}>X</button></li>                
            </div>            
        </div>
    );
}

export default Todo;