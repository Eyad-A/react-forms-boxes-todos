import React from "react";

function Todo({ task = "Walk the dog", id = "1", remove}) {
    const handleDelete = () => remove(id);
   
    return (
        <div>
            <div>
                <li>{task}</li>
            </div>
            <button onClick={handleDelete}>X</button>
        </div>
    );
}

export default Todo;