import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '32rem',
    height: '7rem',
    margin: '1rem 0',
    display: 'flex',
  },
  imageContainer: {
    width: '8rem',
  },
  media: {
    height: '5rem',
    width: '5rem',
    margin: '1rem',
    borderRadius: '.5rem',
  },
  cardtitle: {
    marginLeft: '.3rem',
    color: '#333333',
  },
  mediacontainer: {
    width: '10rem',
  },
}));

export default function AccountSavedItemsCard({ title, imageUrl }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.imageContainer}>
        <CardMedia className={classes.media} image={imageUrl} title={title} />
      </div>

      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h6" className={classes.cardtitle}>
            {title}
          </Typography>
          <Button color="inherit">Delete</Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
