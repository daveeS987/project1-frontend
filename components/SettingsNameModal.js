import { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Modal, Button, Typography, TextField } from '@material-ui/core';
import { CssTextField } from './CustomCssComponents/CssTextField.js';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    borderRadius: 6,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    textAlign: 'center',
  },
  button: {
    padding: 0,
    paddingTop: '1rem',
  },
  custombutton: {
    marginLeft: 0,
    textTransform: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '25rem',
    paddingBottom: '1rem',
    borderBottom: `.1rem solid ${theme.palette.grey[300]}`,
  },
  selection: {
    color: theme.palette.text.secondary,
  },
  // textfield: {
  //   color: '#00A87E',
  //   width: '100%',
  // },
  insidebutton: {
    width: '100%',
    marginTop: '1rem',
    marginBottom: '1rem',
    height: '3rem',
    textTransform: 'none',
    fontSize: '1rem',
  },
  insidetitle: {
    marginBottom: '1rem',
  },
}));

export default function SettingsNameModal() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Typography variant="h5" className={classes.insidetitle}>
        Enter Name
      </Typography>
      <Typography variant="h6" align="left">
        Name
      </Typography>
      <CssTextField className={classes.textfield} variant="outlined" />
      <br />
      <Button
        color="primary"
        variant="contained"
        className={classes.insidebutton}
      >
        Save
      </Button>
    </div>
  );

  return (
    <div>
      <Button onClick={handleOpen} className={classes.button}>
        <div className={classes.custombutton}>
          <Typography
            variant="h6"
            color="secondary"
            className={classes.selection}
          >
            Name
          </Typography>
          <Typography variant="h6" className={classes.editbutton}>
            Edit
          </Typography>
        </div>
      </Button>
      <Modal open={open} onClose={handleClose}>
        {body}
      </Modal>
    </div>
  );
}
