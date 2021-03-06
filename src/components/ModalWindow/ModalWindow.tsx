import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IModal } from '../../types/types';

const style = {
  position: 'absolute' as 'absolute',
  top: '35%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalWindow ({text, showing, setShure, setShowing} : IModal) {

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={showing}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={showing}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {text}
            </Typography>
            <Button size='large' onClick={()=>{
              setShure(true);
              setShowing(!showing)}
              }>Yes</Button>
            <Button size='large' onClick={()=>{
              setShure(false);
              setShowing(!showing)}
              }>No</Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}