import { List, ListItem } from './ContactList.styled';
import { useGetContactsQuery } from 'redux/contacts';
import { useMemo, useState } from 'react';
import { Filter } from 'components/Filter/Filter';
import { Contact } from 'components/Contact/Contact';
import { Loader } from 'components/Loader/Loader';
import PageNotFound from 'pages/PageNotFound/PageNotFound';
import * as React from 'react';
import Box from '@mui/material/Box';

export const ContactList = () => {
  const { data: contacts, isLoading, error } = useGetContactsQuery();
  const [filter, setFilter] = useState('');
  const filtredContact = useMemo(() => {
    return (
      contacts?.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      ) ?? []
    );
  }, [filter, contacts]);

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          backgroundColor: 'lightgreen',
          paddingTop: '40px',
          paddingBottom: '40px',
          textAlign: 'center',
          margin: '0 auto',
        }}
      >
        <Filter value={filter} onChange={setFilter} />
        {/* {!contacts.length && (
          <p>Your phonebook is empty. Please add contact.</p>
        )} */}
        <List>
          {isLoading && <Loader />}
          {error && <PageNotFound data={error.data} status={error.status} />}
          {contacts &&
            filtredContact.map(el => (
              <ListItem key={el.id}>
                <Contact id={el.id} items={el} />
              </ListItem>
            ))}
        </List>
      </Box>
    </>
  );
};
