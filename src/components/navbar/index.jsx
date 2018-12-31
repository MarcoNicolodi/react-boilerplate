import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Consumer as MenuStateConsumer } from '../base-layout/context';

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

const Navbar = props => {
  const { classes } = props;
  return (
    <MenuStateConsumer>
      {({ setIsOpen }) => (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                onClick={() => setIsOpen(true)}
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
                id="app-menu-icon"
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.grow}>
                React Boilerplate
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </div>
      )}
    </MenuStateConsumer>
  );
};

export default withStyles(styles)(Navbar);
