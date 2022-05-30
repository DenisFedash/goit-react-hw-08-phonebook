import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/authOperations';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import authSelectors from 'redux/auth/authSelectors';
import { Spinner } from 'components/Spinner/Spinner';
import Button from '@mui/material/Button';
import toast from 'react-hot-toast';

export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isLoading = useSelector(authSelectors.getLoading);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (email.trim() === '' || password.trim() === '') {
      return toast.error('💩 Please fill in all fields!');
    }
    dispatch(authOperations.logIn({ email, password }));
    toast.success('You enter in phonebook');

    setEmail('');
    setPassword('');
  };

  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: 'yellow',
        paddingTop: '40px',
        paddingBottom: '40px',
        margin: 'auto',
        textAlign: 'center',
        maxWidth: '600px',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        borderRadius: '4px',
      }}
    >
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, MaxWidth: '35ch' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            paddingLeft: '50px',
            paddingRight: '50px',
          }}
        >
          <TextField
            id="standard-required"
            label="E-mail"
            variant="standard"
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <TextField
            style={{ paddingBottom: '30px' }}
            id="standard-password-input"
            label="Password"
            variant="standard"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained">
            {isLoading ? <Spinner /> : 'Log In'}
          </Button>
        </div>
      </Box>
    </Box>
  );
}
