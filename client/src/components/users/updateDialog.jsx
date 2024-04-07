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
import AddIcon from '@mui/icons-material/Edit';

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  let username = React.useRef(props.user.username)
  let name = React.useRef(props.user.name)
  let email = React.useRef(props.user.email)
  let phone = React.useRef(props.user.phone)
  let address = React.useRef(props.user.address)
  const _id = props.user._id

  const { update } = useHttp()
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {

    const n=name.current.value.length?name.current.value:props.user.name
    const e=email.current.value.length?email.current.value:props.user.email
    const a=address.current.value.length?address.current.value:props.user.address
    const p=phone.current.value.length?phone.current.value:props.user.phone
    const u=username.current.value.length?username.current.value:props.user.username

    update('users', { username:u,_id: _id, name: n, email: e, address:a, phone:p }, props.refetch)
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
      <AddIcon/> edit </Button>
      <Dialog open={open} onClose={()=>{setOpen(false)}}>
        <DialogTitle>edit user</DialogTitle>
        <DialogContent>
        <TextField
            inputRef={username}
            autoFocus
            margin="dense"
            id="name"
            label="username"
            type="string"
            fullWidth
            variant="standard"
            defaultValue={props.user.username}
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
            defaultValue={props.user.name}

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
            defaultValue={props.user.email}


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
            defaultValue={props.user.address}

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
            defaultValue={props.user.phone}

          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>update</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );

}


