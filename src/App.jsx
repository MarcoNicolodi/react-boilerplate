import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Android';

const App = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
    <Typography variant="h1">Hello World!</Typography>
    {/* <Icon color="action">
        add_circle
    </Icon> */}
    <MenuIcon />
    <Button variant="contained" color="primary">Oi</Button>
  </div>);

export default App;
