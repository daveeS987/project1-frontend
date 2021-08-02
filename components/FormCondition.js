import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  makeStyles,
  Typography,
  Divider,
  Checkbox,
  withStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  checkbox: {
    height: '1.6rem',
    marginTop: '.2rem',
  },
}));

const GreenCheckbox = withStyles({
  root: {
    '&$checked': {
      color: '#00A87E',
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function FormCondition() {
  const classes = useStyles();
  const activeCategory = useSelector((state) => state.activeCategory.active);
  const [state, setState] = useState({
    newCondition: true,
    reconditioned: false,
    openbox: false,
    used: false,
    forparts: false,
    other: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const { newCondition, reconditioned, openbox, used, forparts, other } = state;

  return (
    <div>
      <Typography>Condition</Typography>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup>
          <FormControlLabel
            className={classes.checkbox}
            control={
              <GreenCheckbox
                checked={newCondition}
                onChange={handleChange}
                name="newCondition"
              />
            }
            label="New"
          />
          <FormControlLabel
            className={classes.checkbox}
            control={
              <GreenCheckbox
                checked={reconditioned}
                onChange={handleChange}
                name="reconditioned"
              />
            }
            label="Reconditioned/Certified"
          />
          <FormControlLabel
            className={classes.checkbox}
            control={
              <GreenCheckbox
                checked={openbox}
                onChange={handleChange}
                name="openbox"
              />
            }
            label="Open Box (never used)"
          />
          <FormControlLabel
            className={classes.checkbox}
            control={
              <GreenCheckbox
                checked={used}
                onChange={handleChange}
                name="used"
              />
            }
            label="Used(normal wear)"
          />
          <FormControlLabel
            className={classes.checkbox}
            control={
              <GreenCheckbox
                checked={forparts}
                onChange={handleChange}
                name="forparts"
              />
            }
            label="For Parts"
          />
          <FormControlLabel
            className={classes.checkbox}
            control={
              <GreenCheckbox
                checked={other}
                onChange={handleChange}
                name="other"
              />
            }
            label="Other(see description)"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}
