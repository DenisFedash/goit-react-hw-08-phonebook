import { Button } from './ContactForm.styled';
import toast from 'react-hot-toast';
import { useAddContactMutation, useGetContactsQuery } from 'redux/contacts';
import { useNavigate } from 'react-router-dom';
import { AddButton } from 'components/ContactList/ContactList.styled';
import { TiArrowBack } from 'react-icons/ti';
import { useState } from 'react';
import { Spinner } from 'components/Spinner/Spinner';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export function ContactForm() {
  const navigate = useNavigate();
  const [addContact, { isLoading }] = useAddContactMutation();
  const { data: contacts } = useGetContactsQuery();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const checkName = name => {
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  const checkNumber = number => {
    return contacts.find(contact => contact.number === number);
  };

  const Error = (name, number) => {
    return name.trim() === '' || number.trim() === '';
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newContact = {
      name,
      number,
    };

    if (checkName(name)) {
      toast(`🤔 ${name} is already in the contacts!`);
    } else if (checkNumber(number)) {
      toast(`🤔 ${number} is already in the contacts!`);
    } else if (Error(name, number)) {
      toast.error('😱 Enter the contacts name and number number!');
    } else {
      addContact(newContact);
      toast.success(`${name} ${number} added successfully!`);
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
    <Box
      sx={{
        position: 'relative',
        backgroundColor: 'lightgreen',
        paddingTop: '40px',
        paddingBottom: '40px',
        margin: 'auto',
        maxWidth: '600px',
      }}
    >
      <AddButton type="button" onClick={() => navigate('/list')}>
        <TiArrowBack size="2em" />
      </AddButton>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1 },
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
            label="Name"
            variant="standard"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <TextField
            id="standard-required"
            label="Number"
            variant="standard"
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? <Spinner /> : 'Add contact'}
          </Button>
        </div>
      </Box>
    </Box>
  );
}
