import React, { useState } from 'react';
import { ListItem, IconButton, ListItemButton, ListItemIcon, Checkbox, ListItemText } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { ITodo } from '../../types/types';
import './ToDo.css';
import ModalWindow from '../ModalWindow/ModalWindow';
const classNames = require('classnames');

const Todo: React.FC<ITodo> = ({task, isComplited, id, doneHandler, removeHandler}) => {

  const [shure, setShure] = useState<boolean>(false);
  
  
  const handleToggle = (id: number) => { 
    const conf = window.confirm('Are you shure');
    setShure(conf)
    if(shure){
      removeHandler(id)
    }
  }

  const containerClases = classNames({itemContainer: true, done: isComplited})

  return (
    <div className={containerClases}>
      <ListItem
            key={id}
            secondaryAction={
              <IconButton edge="end" aria-label="comments" onClick={()=> handleToggle(id)}>
                <DeleteOutlineIcon />
              </IconButton>
            }
            disablePadding
          >
      <ListItemButton role={undefined} dense>
              <ListItemIcon>
                <Checkbox
                  onChange={doneHandler.bind(null, id)}
                  edge="start"
                  checked={isComplited}
                  color='error'
                  // checked.indexOf(value) !== -1
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': '1' }}
                /> 
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{ 
            variant: 'subtitle2', 
            style: {
                overflow: 'hidden',
                textOverflow: 'ellipsis'
            }
        }}
         id={id.toString()} primary={task} />
            </ListItemButton>
          </ListItem>
    </div>
  );
}

export default Todo;