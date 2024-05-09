import React, { useState } from 'react';
import { Task } from './Task';
import { v4 as uuidv4 } from 'uuid';

import '../stylesheet/ListOfTask.css';

export function ListOfTask() {

    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');

    // const addTask = text => {
    //     console.log(text);
    // };

    const deleteTask = (id) => {
        const newTasks = tasks.filter((task) => task.id !== id);
        setTasks(newTasks);
    }

    const completeTask = (id) => {
        const newTasks = tasks.map((task) => {
            if (task.id === id) {
                task.complete = !task.complete
            }
            return task
        })

        setTasks(newTasks);
    }

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleShipping = e => {
        e.preventDefault();
        const taskNew = {
            id: uuidv4(),
            text: input,
            complete: false,
        }
        setTasks([...tasks, taskNew]);
    }

    return (
        <>
            <form 
                className='form-task'
                onSubmit={handleShipping}>
                <input
                    type='text'
                    className='input-task'
                    placeholder='Write a task'
                    name='text'
                    onChange={handleChange}
                />
                <button
                    className='btn-task'>
                    Add task
                </button>
            </form>
            <div className="task-list-content">
                {
                    tasks.map((task) => 
                        <Task
                            key={task.id}
                            text={task.text}
                            complete={task.complete}
                            deleteTask={() => deleteTask(task.id)}
                            completeTask={() => completeTask(task.id)} />
                    )
                }
            </div>
        </>
    );
}