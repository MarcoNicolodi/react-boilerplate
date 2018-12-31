import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider as MenuStateProvider } from './context';
import Navbar from '../navbar';
import Drawer from '../drawer';

const BaseLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CssBaseline>
      <MenuStateProvider value={{ isOpen, setIsOpen }}>
        <Navbar />
        <Drawer />
        {children}
      </MenuStateProvider>
    </CssBaseline>
  );
};

export default BaseLayout;
