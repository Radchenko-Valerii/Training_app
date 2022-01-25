import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const Form = () => {
  const [task, setTask] = useState<string>('');

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value)
  };

  const keyHandler = (event: React.KeyboardEvent) => {
    if(event.key === 'Enter'){
      console.log(task);
      setTask('')
    }
  }

  const clickHandler = () => {
    console.log(task);
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
