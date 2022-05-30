import { Button } from './ContactForm.styled';
import toast from 'react-hot-toast';
import { useAddContactMutation, useGetContactsQuery } from 'redux/contacts';
import { useNavigate } from 'react-router-dom';
import { AddButton } from 'components/ContactList/ContactList.styled';
import { TiArrowBack } from 'react-icons/ti';
import { useState } from 'react';
import { Spinner } from 'components/Spinner/Spinner';

// export function ContactForm() {
//   // const navigate = useNavigate();
//   // const [addContact, { isLoading }] = useAddContactMutation();
//   // const { data: contacts } = useGetContactsQuery();
//   // const [name, setName] = useState('');
//   // const [number, setNumber] = useState('');

//   // const checkName = name => {
//   //   return contacts.find(
//   //     contact => contact.name.toLowerCase() === name.toLowerCase()
//   //   );
//   // };

//   // const checkNumber = number => {
//   //   return contacts.find(contact => contact.number === number);
//   // };

//   // const Error = (name, number) => {
//   //   return name.trim() === '' || number.trim() === '';
//   // };

//   // const handleSubmit = e => {
//   //   e.preventDefault();

//   //   const newContact = {
//   //     name,
//   //     number,
//   //   };

//   //   if (checkName(name)) {
//   //     toast(`🤔 ${name} is already in the contacts!`);
//   //   } else if (checkNumber(number)) {
//   //     toast(`🤔 ${number} is already in the contacts!`);
//   //   } else if (Error(name, number)) {
//   //     toast.error('😱 Enter the contacts name and number number!');
//   //   } else {
//   //     addContact(newContact);
//   //     toast.success(`${name} ${number} added successfully!`);
//   //   }
//   //   reset();
//   // };

//   // const reset = () => {
//   //   setName('');
//   //   setNumber('');
//   // };

//   // const handleChange = e => {
//   //   const { name, value } = e.target;

//   //   switch (name) {
//   //     case 'name':
//   //       setName(value);
//   //       break;

//   //     case 'number':
//   //       setNumber(value);
//   //       break;

//   //     default:
//   //       return;
//   //   }
//   // };

//   return (
//     <>
//       <AddButton type="button" onClick={() => navigate('/')}>
//         <TiArrowBack size="2em" />
//       </AddButton>
//       <Container onSubmit={handleSubmit}>
//         <TextName>
//           Name
//           <Input
//             type="text"
//             name="name"
//             value={name}
//             onChange={handleChange}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//         </TextName>
//         <TextName>
//           Number
//           <Input
//             type="tel"
//             name="number"
//             value={number}
//             onChange={handleChange}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//         </TextName>
//         <Button type="submit" disabled={isLoading}>
//           {isLoading ? <Spinner /> : 'Add contact'}
//         </Button>
//       </Container>
//     </>
//   );
// }

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import { Section } from 'components/Section/Section';
// import { Card } from '@mui/material';

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
        textAlign: 'center',
        // width: '400px',
      }}
    >
      <AddButton type="button" onClick={() => navigate('/')}>
        <TiArrowBack size="2em" />
      </AddButton>
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
            alignItems: 'center',
            width: '200',
          }}
        >
          <TextField
            style={{ color: 'white' }}
            id="outlined-name"
            label="Name"
            variant="filled"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <TextField
            id="outlined-number"
            label="Number"
            variant="filled"
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
