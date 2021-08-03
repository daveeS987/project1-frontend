import {
  Modal,
  Button,
  Typography,
  TextField,
  withStyles,
} from '@material-ui/core';

export const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#333333',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#333333',
      },
      '&:hover fieldset': {
        borderColor: '#00A87E',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#333333',
      },
    },
    marginTop: '1rem',
    marginBottom: '1rem',
    color: '#00A87E',
    width: '100%',
  },
})(TextField);
