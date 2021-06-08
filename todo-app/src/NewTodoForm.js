import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./NewTodoForm.css";

const NewTodoForm = ({ createTodo }) => {
    const [task, setTask] = useState("");

    const handleSubmit = evt => {
        evt.preventDefault();
        createTodo({ task, id: uuidv4() });
        setTask("");
    };

    const handleChange = evt => {
        setTask(evt.target.value);
    };

    return (
        <form className="todoform" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="task">Task:</label>
                <input
                    id="task"
                    name="task"
                    type="text"
                    value={task}
                    onChange={handleChange}
                />
            </div>
            <button>Add a new todo</button>
        </form>
    );
};

export default NewTodoForm;