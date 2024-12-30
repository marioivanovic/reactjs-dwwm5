import React, { useState, useRef } from 'react'

function ToDo() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const inputRef = useRef(null);

    const addNewTask = (e) => {
        e.preventDefault();

        if (newTask.trim()) {
            setTasks([...tasks, {
                id: Date.now(),
                text: newTask,
            }]);
            setNewTask('');

            inputRef.current.focus();

        }
    }
    return (
        <>

            <form onSubmit={addNewTask}>
                <input ref={inputRef} type="text" name="" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="add a new task" />
                <button type="submit">Add new task</button>
            </form>

            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <p>{task.text}</p>
                    </li>
                ))}
            </ul>


        </>
    )
}

export default ToDo
