import { Grid, Box, Paper, makeStyles, Typography } from '@material-ui/core';

import AccountSavedItemsCard from './AccountSavedItemsCard';

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: '2rem',
  },
}));

function AccountSavedItemsView() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.title}>
        <Typography variant="h5">Quick Save</Typography>
      </div>
      <AccountSavedItemsCard
        title={'Item 1'}
        imageUrl={'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg'}
      />
      <AccountSavedItemsCard
        title={'Random Item 2'}
        imageUrl={'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg'}
      />
    </div>
  );
}

export default AccountSavedItemsView;
