import React from 'react';
import { ITodos } from '../../types/types';
import Todo from '../Todo/Todo';
import './ToDoList.css'

const ToDoList: React.FC<ITodos> = ({tasks, doneHandler, removeHandler}) => {
  return (
    <div className='toDoContainer'>
      {tasks.map(({id, task, isComplited})=>
      <Todo key={id} task={task} isComplited={isComplited} id={id} doneHandler={doneHandler} removeHandler={removeHandler}/>)}
    </div>
  );
}

export default ToDoList;