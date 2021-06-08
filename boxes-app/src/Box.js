import React from "react";

function Box({
    id,
    handleRemove,
    width=200,
    height=200,
    backgroundColor = "green"
}) {
    const remove = () => handleRemove(id);
    return (
        <div>
            <div 
                style={{
                    height: `${height}px`,
                    width: `${width}px`,
                    backgroundColor 
                }}
            />
            <button onClick={remove}>X</button>            
        </div>
    );
}

export default Box;