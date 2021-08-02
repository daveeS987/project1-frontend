import {
  Grid,
  Box,
  Paper,
  makeStyles,
  Typography,
  Avatar,
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
    direction: 'column',
  },
  avatar: {
    height: '8rem',
    width: '8rem',
  },
  rightside: {
    marginLeft: '2rem',
    marginTop: '2rem',
  },
  indent1: {
    paddingLeft: '.2rem',
  },
}));

function AccountSettingAvatar() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <div>
          <Avatar alt="" src="/broken-image.jpg" className={classes.avatar} />
        </div>
        <div className={classes.rightside}>
          <Typography variant="h6" className={classes.indent1}>
            Name
          </Typography>
          <Typography variant="h6" className={classes.indent1}>
            Location
          </Typography>
          <Rating name="size-medium" defaultValue={2} />
        </div>
      </div>
    </>
  );
}

export default AccountSettingAvatar;
