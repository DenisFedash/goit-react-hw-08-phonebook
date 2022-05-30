import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Navigation } from 'components/Navigation/Navigation';

export default function MenuAppBar() {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Box sx={{ flexGrow: 1, paddingBottom: '50px' }}>
      <AppBar position="static">
        <Toolbar
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            variant="h6"
            component="div"
            style={{ marginRight: '10px' }}
          >
            Phonebook
          </Typography>
          <Navigation />
          {isLoggedIn ? (
            <UserMenu />
          ) : (
            <div>
              <Button
                style={{ marginRight: '10px' }}
                color="error"
                variant="outlined"
                type="button"
                onClick={() => navigate('login')}
              >
                Log In
              </Button>
              <Button
                color="error"
                variant="outlined"
                type="button"
                onClick={() => navigate('register')}
              >
                Sign In
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
// palette: {
// primary: yellow,
// secondary: {
//   main: '#e6ee9c',
// },
