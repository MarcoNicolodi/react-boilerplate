import React from 'react';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from './components/navbar';

const App = () => (
  <CssBaseline>
    <Navbar />
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center'
      }}
    >
      <Typography variant="h2">Make wonderful things!</Typography>
    </div>
  </CssBaseline>
);

export default App;
