import React from 'react';
import { useSelector } from 'react-redux';
import { selectTasks } from './TaskSlice';
import TaskItem from './TaskItem';

const TaskList = () => {
    const tasks = useSelector(selectTasks);
    return (
        <>
            {tasks.map((task) => <TaskItem key={task.id} task={task} />)}
        </>
    )
}

export default TaskList;
