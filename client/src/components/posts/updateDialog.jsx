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
  let title = React.useRef(props.post.title)
  let body = React.useRef(props.post.body)
  const _id = props.post._id

  const { update } = useHttp()
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {

    const t=title.current.value.length?title.current.value:props.post.title
    const b=body.current.value.length?body.current.value:props.post.body

    update('posts', { _id: _id, title: t, body: b }, props.refetch)
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
      <EditIcon/> edit </Button>
      <Dialog open={open} onClose={()=>{setOpen(false)}}>
        <DialogTitle>post</DialogTitle>
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
            defaultValue={props.post.title}

          />
          <TextField
            inputRef={body}
            autoFocus
            margin="dense"
            id="name"
            label="body"
            type="string"
            fullWidth
            variant="standard"
            defaultValue={props.post.body}
            
          />


        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>update</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );

}


