import { List, SectionList, ListItem } from './ContactList.styled';
import { useGetContactsQuery } from 'redux/contacts';
import { useMemo, useState } from 'react';
import { Filter } from 'components/Filter/Filter';
import { Contact } from 'components/Contact/Contact';
import { Loader } from 'components/Loader/Loader';
import PageNotFound from 'pages/PageNotFound/PageNotFound';

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
      <SectionList>
        <Filter value={filter} onChange={setFilter} />
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
      </SectionList>
    </>
  );
};
