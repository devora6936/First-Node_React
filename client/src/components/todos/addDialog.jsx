import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { current } from '@reduxjs/toolkit';
import useHttp from '../../hooks/useHttp';
import { Refresh } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add'


export default function AddDialog(props) {
  const [open, setOpen] = React.useState(false);
  let title = React.useRef("")
  let tags = React.useRef(undefined)


  const { add } = useHttp()
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose2 = () => {
    const tmp=tags.current.value.split(',')
    add('todos', {title: title.current.value, tags: tmp }, props.refetch)
    setOpen(false);
  };


  

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        <AddIcon/>
        add </Button>
      <Dialog open={open} onClose={()=>{setOpen(false)}}>
        <DialogTitle>add todo</DialogTitle>
        <DialogContent>
          <TextField
            inputRef={title}
            autoFocus
            margin="dense"
            id="name"
            label="title"
            type="string"
            fullWidth
            variant="standard"
            required
          />
          <TextField
            inputRef={tags}
            autoFocus
            margin="dense"
            id="name"
            label="tags"
            type="string"
            fullWidth
            variant="standard"
            
          />


        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose2}>add</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );

}


