import { ContactList } from 'components/ContactList/ContactList';
import { AddButton } from 'components/ContactList/ContactList.styled';
import { useNavigate } from 'react-router-dom';
import { useGetContactsQuery } from 'redux/contacts';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import Box from '@mui/material/Box';

export default function ContactPage() {
  const { data } = useGetContactsQuery();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: 'lightgreen',
        paddingTop: '40px',
        paddingBottom: '40px',
        textAlign: 'center',
        margin: '0 auto',
        maxWidth: '600px',
      }}
    >
      <AddButton type="button" onClick={() => navigate('/create')}>
        <BsFillPersonPlusFill size="1.5em" />
      </AddButton>
      {!data || data.lenght === 0 ? (
        <p>Your phonebook is empty. Please add contact.</p>
      ) : (
        <ContactList />
      )}
    </Box>
  );
}
