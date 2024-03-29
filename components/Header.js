import { useDispatch } from 'react-redux';

import {
  Badge,
  IconButton,
  InputBase,
  Typography,
  alpha,
  makeStyles,
  AppBar,
  Toolbar,
} from '@material-ui/core';

import FavoriteBorderSharpIcon from '@material-ui/icons/FavoriteBorderSharp';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import MoreIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import MailIcon from '@material-ui/icons/Mail';
import AccountCircle from '@material-ui/icons/AccountCircle';

import { changeview } from '../store/viewSlice';
import { changeAccountView } from '../store/accountView';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    fontWeight: 600,
    fontSize: '1.7rem',
    cursor: 'pointer',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.grey[200], 0.5),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
    border: '1px solid #e2e2e2',
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    backgroundColor: theme.palette.primary.contrastText,
    color: 'white',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '30rem',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(7)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  header: {
    boxShadow: 'none',
  },
  bar: {
    height: '4rem',
    paddingLeft: '1rem',
    paddingRight: '1.2rem',
  },
  icon: {
    fontSize: '1.8rem',
  },
}));

export default function Header() {
  const classes = useStyles();
  const dispatch = useDispatch();

  function handleChangeView(view) {
    dispatch(changeview(view));
  }
  function changeAccounts(accountview) {
    dispatch(changeview('accounts'));
    dispatch(changeAccountView(accountview));
  }

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.header}>
        <Toolbar className={classes.bar}>
          <Typography
            className={classes.title}
            variant="h5"
            noWrap
            onClick={() => handleChangeView('home')}
          >
            OfferUp Clone
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              color="inherit"
              onClick={() => changeAccounts('SavedItems')}
            >
              <Badge badgeContent={3} color="secondary">
                <FavoriteBorderSharpIcon className={classes.icon} />
              </Badge>
            </IconButton>
            <IconButton
              color="inherit"
              onClick={() => changeAccounts('PaymentMethods')}
            >
              <Badge badgeContent={3} color="secondary">
                <MailIcon className={classes.icon} />
              </Badge>
            </IconButton>
            <IconButton
              color="inherit"
              onClick={() => changeAccounts('PurchasesAndSales')}
            >
              <Badge badgeContent={12} color="secondary">
                <LocalOfferOutlinedIcon className={classes.icon} />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              color="inherit"
              onClick={() => changeAccounts('Settings')}
            >
              <AccountCircle className={classes.icon} />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton color="inherit">
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
