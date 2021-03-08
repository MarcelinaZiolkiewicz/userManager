import React, {useContext,useState, useRef} from 'react';
import {AppContext} from "../context/AppContext";

import '../style/TaskList.sass';

const TaskList = ({toAddId, taskList, }) => {

    const [isToAdd, setIsToAdd] = useState(false);
    const [taskToAdd, setTaskToAdd] = useState("");
    const [newTaskList, setNewTaskList] = useState(taskList);

    const handleInputTask = (e) => {
        setTaskToAdd(e.target.value);
    }

    const handleAddTask = () => {
        if (isToAdd && taskToAdd.length > 0){
            setNewTaskList([...newTaskList, taskToAdd]);
        }else {
            setTaskToAdd("");
        }
        setIsToAdd(prevValue => !prevValue);
    }

    let taskId = 0;

    const handleDeleteTask = id => {
        const newTasks = [...newTaskList];
        newTasks.splice(id, 1);
        setNewTaskList(newTasks);
    }

    const tasks = newTaskList.map(task => (
        <li key={taskId += 1}>
            {taskId+1}. {task}
            <button onClick={handleDeleteTask.bind(this, taskId)} className="deleteTaskButton">X</button>
        </li>
    ));

    const ifThereAreTasks = (tasks.length > 0
        ? "Zadania do wykonania"
        : "Dodaj zadania"
    );

    const addOrSubmit = (isToAdd
        ? "Zatwierdź"
        : "+ Dodaj nowe zadanie"
    )

    const taskInput = (isToAdd
            ? <input
                type="text"
                placeholder="Dodaj nowe zadanie"
                value={taskToAdd}
                onChange={handleInputTask}
            />
            : null
    );

    return(
        <section className="taskList">
            <h4>{ifThereAreTasks}</h4>
            <ul>
                {tasks}
                {taskInput}
            </ul>
            <button onClick={handleAddTask}>{addOrSubmit}</button>
        </section>
    );
}

export default TaskList;



