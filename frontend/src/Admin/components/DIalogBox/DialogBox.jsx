import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function DialogBox({ open, setOpen, data }) {
  //   const [open, setOpen] = React.useState(false);

  //   const handleClickOpenDialog = () => {
  //     setOpen(true);
  //   };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAgreeBtn = () => {
    setOpen(false);
    data(open.id);
  };

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpenDialog}>
        Open alert dialog
      </Button> */}
      <Dialog
        open={open.open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Confirm Delete'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleAgreeBtn} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
