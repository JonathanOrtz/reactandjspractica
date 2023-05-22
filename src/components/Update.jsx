import { useState } from "react";

export default function Update(){

    
    return (
        <div>
            <input 
                type="text"
                value={props.UpdateTask}
                onChange={handleUpdateInputChange}
                />
            <button onClick={() => updatetaskFunction(index)}>Save</button>
            <button onClick={finishEditting}>Cancel</button>
        </div>
    )
}