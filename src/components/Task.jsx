import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";  

import '../stylesheet/Task.css';

export function Task({id, text, complete, completeTask, deleteTask}) {
    return (
        <div 
            className={complete ? "content-task complete" : "content-task"}>
            <div className="task-text"
                onClick={() => completeTask(id)}>
                {text}
            </div>
            <div 
                className="task-content-icons"
                onClick={() => deleteTask(id)}>
                <AiOutlineCloseCircle className="task-icon" />
            </div>
        </div>
    );
}