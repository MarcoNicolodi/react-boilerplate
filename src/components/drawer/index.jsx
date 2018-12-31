import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Home from '@material-ui/icons/Home';
import People from '@material-ui/icons/People';
import { Consumer as MenuStateConsumer } from '../base-layout/context';

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
};

const topLinks = [
  {
    key: 1,
    label: 'Home',
    route: '/',
    renderIcon: () => <Home />
  }
];

const bottomLinks = [
  {
    key: 1,
    label: 'Users',
    route: '/users',
    renderIcon: () => <People />
  }
];

const TemporaryDrawer = props => {
  const { classes } = props;
  const sideList = (
    <div className={classes.list} id="app-drawer">
      <List>
        {topLinks.map(link => (
          <Link key={link.key} to={link.route} style={{ textDecoration: 'none' }}>
            <ListItem button key={link}>
              <ListItemIcon>{link.renderIcon()}</ListItemIcon>
              <ListItemText primary={link.label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {bottomLinks.map(link => (
          <Link key={link.key} to={link.route} style={{ textDecoration: 'none' }}>
            <ListItem button key={link}>
              <ListItemIcon>{link.renderIcon()}</ListItemIcon>
              <ListItemText primary={link.label} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
  return (
    <MenuStateConsumer>
      {({ isOpen, setIsOpen: toggleDrawer }) => (
        <div>
          <Drawer open={isOpen} onClose={() => toggleDrawer(false)}>
            <div
              tabIndex={0}
              role="button"
              onClick={() => toggleDrawer(false)}
              onKeyDown={() => toggleDrawer(false)}
            >
              {sideList}
            </div>
          </Drawer>
        </div>
      )}
    </MenuStateConsumer>
  );
};
export default withStyles(styles)(TemporaryDrawer);
