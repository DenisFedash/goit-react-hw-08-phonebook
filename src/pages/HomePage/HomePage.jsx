import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { Text } from './HomePage.styled';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import { LinkContacts } from 'components/Navigation/Navigation.styled';
import authSelectors from 'redux/auth/authSelectors';

export default function HomePage() {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Box
      sx={{
        paddingTop: '40px',
        paddingBottom: '40px',
        textAlign: 'center',
        margin: '0 auto',
      }}
    >
      {isLoggedIn ? (
        <>
          <Text>You are in Phonebook</Text>
          <Text>
            Please, select
            <LinkContacts
              style={{
                textDecoration: 'underline',
                color: 'yellow',
                marginLeft: '10px',
              }}
              to="/list"
            >
              Contacts
            </LinkContacts>
          </Text>
        </>
      ) : (
        <>
          <Text>Welcome to Phonebook</Text>
          <Text>Please, Log In or Sign In</Text>
          <Button
            style={{ marginRight: '40px', backgroundColor: 'yellow' }}
            variant="outlined"
            type="button"
            onClick={() => navigate('login')}
          >
            Log In
          </Button>
          <Button
            style={{ backgroundColor: 'yellow' }}
            variant="outlined"
            type="button"
            onClick={() => navigate('/register')}
          >
            Sign In
          </Button>
        </>
      )}
    </Box>
  );
}
