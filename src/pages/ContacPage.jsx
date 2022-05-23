import { ContactList } from 'components/ContactList/ContactList';
import { useGetContactsQuery } from 'redux/contacts';

export default function ContactPage() {
  const { data } = useGetContactsQuery();

  return (
    <>
      {!data || data.lenght === 0 ? (
        <p>Your phonebook is empty. Please add contact.</p>
      ) : (
        <ContactList />
      )}
    </>
  );
}
