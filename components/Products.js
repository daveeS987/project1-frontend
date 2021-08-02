import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Grid,
  Paper,
  makeStyles,
  Typography,
  Button,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
  Card,
} from '@material-ui/core';

import { getProducts } from '../store/productSlice';

const useStyles = makeStyles((theme) => ({
  rightSide: {
    marginRight: '1rem',
    marginLeft: '0.6rem',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
}));

function Products() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.entities);

  return (
    <Grid container spacing={3}>
      {Object.values(products).map((obj) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={obj.id}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={obj.imageUrl}
                title={obj.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {obj.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {obj.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="inherit">
                Share
              </Button>
              <Button size="small" color="inherit">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Products;
