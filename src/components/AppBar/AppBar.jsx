import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import HomePage from 'pages/HomePage/HomePage';

export default function MenuAppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <HomePage />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Phonebook
          </Typography>
          {isLoggedIn ? <UserMenu /> : <p>Please Log In</p>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
