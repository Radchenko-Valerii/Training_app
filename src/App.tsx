import React, { useState } from 'react';
import Form from './components/Form/Form';
import ModalWindow from './components/ModalWindow/ModalWindow';
import NavBar from './components/NavBar/NavBar';
import ToDoList from './components/ToDoList/ToDoList';
import { ITodosState } from './types/types';


const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodosState[]>([]);

  const addHandler = (task: string) => {
    const newEntry = {
      task: task,
      id: Date.now(),
      isComplited: false
    }
    setTodos([newEntry, ...todos]);
  }

  const doneHandler = (id: number) => {
    setTodos(prev => prev.map((task) => {
      if(task.id === id){
        task.isComplited = !task.isComplited
    } return task}))
  }

  const removeHandler = (id: number) => {
    setTodos(prev => prev.filter((task)=> task.id!==id))
  }

  return (
    <>
      <NavBar/>
      <Form addTask={addHandler}/>
      <ToDoList tasks={todos} doneHandler={doneHandler} removeHandler={removeHandler}/>
    </>
  );
}

export default App;
