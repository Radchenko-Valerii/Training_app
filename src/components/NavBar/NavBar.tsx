import React from 'react';
import { Button } from '@mui/material';


const Test = () => {
  return (
    <div style={{display: "flex", justifyContent: "space-around", height: "60px", background: "#b0bec5"}}>
    <Button size='large' href="/">Home</Button>
    <Button size='large' href="/">About</Button>
    <Button size='large' href="/">Contacts</Button>
    <Button size='large' href="/">FAQ</Button>
    </div>
  );
}

export default Test;
