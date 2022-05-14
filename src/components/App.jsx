import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Title, TitleList } from './App.styled';
import { Toaster } from 'react-hot-toast';
import { Section } from './Section/Section';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/valueSlice';

export default function APP() {
  const contacts = useSelector(getContacts);
  return (
    <Section>
      <Title>Phonebook</Title>
      <ContactForm />
      <Toaster />
      <TitleList>Contacts</TitleList>
      {contacts.length > 1 && <Filter />}
      {contacts.length > 0 ? (
        <ContactList />
      ) : (
        <p>Your phonebook is empty. Please add contact.</p>
      )}
    </Section>
  );
}
