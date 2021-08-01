import React from 'react';
import { useDispatch } from 'react-redux';
import {
  makeStyles,
  Button,
  MenuList,
  MenuItem,
  Popper,
  Paper,
  ClickAwayListener,
  Grow,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  button: {
    textTransform: 'none',
    color: '#616161',
  },
  menuItem: {
    color: '#616161',
  },
}));

import { changeview } from '../store/viewSlice';
import { changeActiveCategory } from '../store/activeCategory';

export default function DropDownButton({ name, id, subCategory }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = (name) => {
    const newActiveCategory = {
      name,
      id,
      subCategory,
    };
    dispatch(changeActiveCategory(newActiveCategory));
    dispatch(changeview('category'));
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <Button
        ref={anchorRef}
        onClick={() => handleToggle(name)}
        onMouseOver={() => setOpen(true)}
        onMouseOut={() => setOpen(false)}
        key={id}
        id={id}
        className={classes.button}
        color="inherit"
      >
        {name}
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  {subCategory.map((category) => (
                    <MenuItem
                      onClick={handleClose}
                      key={Math.random()}
                      className={classes.menuItem}
                    >
                      {category}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}
