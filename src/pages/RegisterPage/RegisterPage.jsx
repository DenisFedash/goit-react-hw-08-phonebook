import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/authOperations';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import authSelectors from 'redux/auth/authSelectors';
import Button from '@mui/material/Button';
import { Spinner } from 'components/Spinner/Spinner';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isLoading = useSelector(authSelectors.getLoading);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
      return toast.error('💩 Please fill in all fields!');
    } else if (password.length < 7) {
      return toast.info('Passwords must be at least 7 characters long!');
    }
    dispatch(authOperations.register({ name, email, password }));
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
            id="standard-name"
            label="Name"
            variant="standard"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
          <TextField
            id="standard-email"
            label="E-mail"
            variant="standard"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <TextField
            style={{ paddingBottom: '30px' }}
            id="standard-password"
            label="Password"
            variant="standard"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          <Button
            variant="contained"
            type="submit"
            disabled={isLoading}
            onSubmit={() => navigate('login')}
          >
            {isLoading ? <Spinner /> : 'Sign Up'}
          </Button>
        </div>
      </Box>
    </Box>
  );
}
