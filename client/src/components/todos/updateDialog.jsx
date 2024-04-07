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
import EditIcon from '@mui/icons-material/Edit';

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  let title = React.useRef(props.todo.title)
  let tags = React.useRef(props.todo.tags)
  const _id = props.todo._id

  const { update } = useHttp()
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {

    const t=title.current.value.length?title.current.value:props.todo.title
    const ta=tags.current.value.length?tags.current.value:props.todo.tags
    const tmp=ta.split(',')

    update('todos', { _id: _id, title: t, tags: tmp }, props.refetch)
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        <EditIcon/>
        edit </Button>
      <Dialog open={open} onClose={()=>{setOpen(false)}}>
        <DialogTitle>edit todo</DialogTitle>
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
            defaultValue={props.todo.title}

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
            defaultValue={props.todo.tags}

            
          />


        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>update</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );

}


