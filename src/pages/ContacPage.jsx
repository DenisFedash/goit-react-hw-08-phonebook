import { ContactList } from 'components/ContactList/ContactList';
import { AddButton } from 'components/ContactList/ContactList.styled';
import { useNavigate } from 'react-router-dom';
import { useGetContactsQuery } from 'redux/contacts';
import { BsFillPersonPlusFill } from 'react-icons/bs';

export default function ContactPage() {
  const { data } = useGetContactsQuery();
  const navigate = useNavigate();

  return (
    <>
      <AddButton type="button" onClick={() => navigate('/create')}>
        <BsFillPersonPlusFill size="1.5em" />
      </AddButton>
      {!data || data.lenght === 0 ? (
        <p>Your phonebook is empty. Please add contact.</p>
      ) : (
        <ContactList />
      )}
    </>
  );
}
