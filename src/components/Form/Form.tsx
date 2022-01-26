import React, { useEffect, useState } from 'react';
import { TextField, Button } from '@mui/material';
import { AddTask } from '@mui/icons-material';

interface IForm {
  addTask(task: string): void;
}

const Form: React.FC<IForm> = ({addTask}) => {
  const [task, setTask] = useState<string>('');

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value)
  };

  // useEffect((task: string) => {return addTask(task)}, [task]);

  const keyHandler = (event: React.KeyboardEvent) => {
    if(event.key === 'Enter'){
      addTask(task);
      setTask('')
    }
  }

  const clickHandler = () => {
    addTask(task);
    setTask('')
  }

  return (
    <div style={{marginTop: "100px", display: "flex", justifyContent: "center"}}>
      <TextField onKeyDown={keyHandler} value={task} onChange={changeHandler} id="outlined-basic" label="Add task" variant="outlined" />
      <Button onClick={clickHandler} variant="outlined" type="submit">GO</Button>
    </div>
  );
}

export default Form;
