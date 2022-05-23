import { Container, TextName, Input, Button } from './ContactForm.styled';
import toast from 'react-hot-toast';
import { useAddContactMutation, useGetContactsQuery } from 'redux/contacts';
import { useNavigate } from 'react-router-dom';
import { AddButton } from 'components/ContactList/ContactList.styled';
import { TiArrowBack } from 'react-icons/ti';
import { useState } from 'react';
import { Spinner } from 'components/Spinner/Spinner';

export function ContactForm() {
  const navigate = useNavigate();
  const [addContact, { isLoading }] = useAddContactMutation();
  const { data: contacts } = useGetContactsQuery();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const checkName = name => {
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  const checkNumber = phone => {
    return contacts.find(contact => contact.phone === phone);
  };

  const Error = (name, phone) => {
    return name.trim() === '' || phone.trim() === '';
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newContact = {
      name,
      phone,
    };

    if (checkName(name)) {
      toast(`🤔 ${name} is already in the contacts!`);
    } else if (checkNumber(phone)) {
      toast(`🤔 ${phone} is already in the contacts!`);
    } else if (Error(name, phone)) {
      toast.error('😱 Enter the contacts name and number phone!');
    } else {
      addContact(newContact);
      toast.success(`${name} ${phone} added successfully!`);
    }
    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      default:
        return;
    }
  };

  return (
    <>
      <AddButton type="button" onClick={() => navigate('/')}>
        <TiArrowBack size="2em" />
      </AddButton>
      <Container onSubmit={handleSubmit}>
        <TextName>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </TextName>
        <TextName>
          Number
          <Input
            type="tel"
            name="phone"
            value={phone}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </TextName>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? <Spinner /> : 'Add contact'}
        </Button>
      </Container>
    </>
  );
}
