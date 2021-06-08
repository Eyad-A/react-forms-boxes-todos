import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const NewBoxForm = ({ createBox }) => {
    const [formData, setFormData] = useState({
        height: "",
        width: "",
        backgroundColor: ""
    });

    const handleSubmit = evt => {
        evt.preventDefault();
        createBox({ ...formData, id: uuidv4() });
        setFormData({ height: "", width: "", backgroundColor: "" });
    };

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="backgroundColor">Background Color</label>
                <input
                    id="backgroundColor"
                    name="backgroundColor"
                    type="text"
                    value={formData.backgroundColor}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="height">Height</label>
                <input
                    id="height"
                    name="height"
                    type="text"
                    value={formData.height}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="width">Width</label>
                <input
                    id="width"
                    name="width"
                    type="text"
                    value={formData.width}
                    onChange={handleChange}
                />
            </div>

            <button>Add a new box</button>
        </form>
    );
};

export default NewBoxForm;