import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuIcon from '@material-ui/icons/Android';

const App = () => (
  <CssBaseline>
    <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
      <Typography variant="h1">Hello World!</Typography>
      <Button variant="contained" color="primary">
      Hello World
      </Button>
      <MenuIcon />
      <Button variant="contained" color="primary">Oi</Button>
    </div>
  </CssBaseline>
);

export default App;
