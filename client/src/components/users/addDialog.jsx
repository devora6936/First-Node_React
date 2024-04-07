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
  let username = React.useRef(undefined)
  let name = React.useRef(undefined)
  let email = React.useRef(undefined)
  let phone = React.useRef(undefined)
  let address = React.useRef(undefined)


  const { add } = useHttp()
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    add('users', { username:username.current.value,name: name.current.value, email: email.current.value, phone: phone.current.value, address: address.current.value }, props.refetch)
    setOpen(false);
  };



  return (
    <React.Fragment >
      <div id="add">
      <Button  variant="outlined" onClick={handleClickOpen}>
       <AddIcon/> add </Button>
      <Dialog open={open} onClose={()=>{setOpen(false)}}>
        <DialogTitle>add user</DialogTitle>
        <DialogContent>
        <TextField
            inputRef={username}
            autoFocus
            margin="dense"
            id="name"
            label="userName"
            type="string"
            fullWidth
            variant="standard"
            required
          />
          <TextField
            inputRef={name}
            autoFocus
            margin="dense"
            id="name"
            label="name"
            type="string"
            fullWidth
            variant="standard"
            required
          />
          <TextField
            inputRef={email}
            autoFocus
            margin="dense"
            id="name"
            label="email"
            type="email"
            fullWidth
            variant="standard"

          />
          <TextField
            inputRef={address}
            autoFocus
            margin="dense"
            id="name"
            label="address"
            type="string"
            fullWidth
            variant="standard"
          />
          <TextField
            inputRef={phone}
            autoFocus
            margin="dense"
            id="name"
            label="phone"
            type="string"
            fullWidth
            variant="standard"
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>add</Button>
        </DialogActions>
      </Dialog>
      </div>
    </React.Fragment>
  );

}


