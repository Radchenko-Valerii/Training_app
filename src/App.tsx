import React, { useState } from 'react';
import Form from './components/Form/Form';
import NavBar from './components/NavBar/NavBar';
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

  return (
    <>
      <NavBar/>
      <Form addTask={addHandler}/>
    </>
  );
}

export default App;
