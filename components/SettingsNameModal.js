import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Button, Typography } from '@material-ui/core';

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
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
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
  editbutton: {
    fontWeight: 550,
    fontSize: '1.3rem',
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
      <h2>Enter Name</h2>
      <p>Name</p>
      <input></input>
      <Button>save</Button>
    </div>
  );

  return (
    <div>
      <Button onClick={handleOpen} className={classes.button}>
        <div className={classes.custombutton}>
          <Typography variant="h6" className={classes.selection}>
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
