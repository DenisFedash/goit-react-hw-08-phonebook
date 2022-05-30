import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { Text } from './HomePage.styled';
import Button from '@mui/material/Button';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        paddingTop: '40px',
        paddingBottom: '40px',
        textAlign: 'center',
        margin: '0 auto',
      }}
    >
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
    </Box>
  );
}
