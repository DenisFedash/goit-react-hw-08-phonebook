import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/authOperations';
import authSelectors from 'redux/auth/authSelectors';
import defaultAvatar from '../../img/avatar.png';
import { Avatar, Name } from './UserMenu.styled';
import Button from '@mui/material/Button';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <div>
      <Avatar src={defaultAvatar} alt="avatar" width="32" />
      <Name>{name}</Name>

      <Button
        color="error"
        variant="outlined"
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log Out
      </Button>
    </div>
  );
}
