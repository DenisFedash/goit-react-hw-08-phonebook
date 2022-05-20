import { useState } from 'react';
import { Container, TextName, Input, Button } from './ContactForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, getContacts } from '../../redux/valueSlice';
import { nanoid } from 'nanoid';
import toast from 'react-hot-toast';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const checkName = name => {
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  const checkNumber = number => {
    return contacts.find(contact => contact.number === number);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    if (checkName(name)) {
      toast(`🤔 ${name} is already in the contacts!`);
    } else if (checkNumber(number)) {
      toast(`🤔 ${number} is already in the contacts!`);
    } else {
      dispatch(addContact(newContact));
    }
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  return (
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
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </TextName>
      <Button type="submit">Add contact</Button>
    </Container>
  );
}
