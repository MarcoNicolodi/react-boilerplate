import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from '../navbar';
import Drawer from '../drawer';

const App = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CssBaseline>
      <Navbar onMenuClick={setIsOpen} />
      <Drawer isOpen={isOpen} toggleDrawer={setIsOpen} />
      {children}
    </CssBaseline>
  );
};

export default App;
