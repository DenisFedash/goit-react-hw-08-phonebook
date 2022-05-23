// import { useState } from 'react';
import { Container, TextName, Input, Button } from './ContactForm.styled';
import toast from 'react-hot-toast';
import { useAddContactMutation, useGetContactsQuery } from 'redux/contacts';
import { useNavigate } from 'react-router-dom';
import { AddButton } from 'components/ContactList/ContactList.styled';
import { TiArrowBack } from 'react-icons/ti';

export function ContactForm({ name, phone }) {
  const navigate = useNavigate();
  const [addContact] = useAddContactMutation();

  const handleSubmit = async e => {
    e.preventDefault();
    const newContact = {
      name: e.currentTarget.elements.name.value,
      phone: e.currentTarget.elements.phone.value,
    };
    try {
      await addContact(newContact);
      toast.success('Contact added successfuly!');
      navigate('/list', { replace: true });
    } catch (error) {
      toast.error('Ошибка при добавлении');
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
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </TextName>
        <Button type="submit">Add contact</Button>
      </Container>
    </>
  );
}
