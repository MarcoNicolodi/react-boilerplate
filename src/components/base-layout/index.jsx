import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from '../navbar';

const App = ({ children }) => (
  <CssBaseline>
    <Navbar />
    {children}
  </CssBaseline>
);

export default App;
