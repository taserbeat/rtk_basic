import React from 'react';
import { useDispatch } from 'react-redux';
import { completeTask, deleteTask } from './TaskSlice';

const TaskItem = ({ task }) => {
    const dispatch = useDispatch();

    return (
        <div>
            <input type="checkbox" onClick={() => dispatch(completeTask(task))} defaultChecked={task.completed} ></input>
            <span>{task.title}</span>
            <button onClick={() => dispatch(deleteTask(task))}>Delete</button>
        </div>
    )
}

export default TaskItem;