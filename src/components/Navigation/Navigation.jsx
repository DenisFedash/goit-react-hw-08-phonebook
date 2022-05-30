import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import { LinkContacts, LinkHome } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div>
      <LinkHome to="/">Home Page</LinkHome>
      {isLoggedIn ? <LinkContacts to="/list">Contacts</LinkContacts> : ''}
    </div>
  );
};
