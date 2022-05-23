import { List, SectionList, AddButton, ListItem } from './ContactList.styled';
import { useGetContactsQuery } from 'redux/contacts';
import { useMemo, useState } from 'react';
import { Filter } from 'components/Filter/Filter';
import { useNavigate } from 'react-router-dom';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { Contact } from 'components/Contact/Contact';
import { Loader } from 'components/Loader/Loader';
import PageNotFound from 'pages/PageNotFound/PageNotFound';

export const ContactList = () => {
  const { data: contacts, isFetching, error } = useGetContactsQuery();

  const [filter, setFilter] = useState('');
  const navigate = useNavigate();

  const filtredContact = useMemo(() => {
    return (
      contacts?.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      ) ?? []
    );
  }, [filter, contacts]);

  return (
    <SectionList>
      <AddButton type="button" onClick={() => navigate('/create')}>
        <BsFillPersonPlusFill size="1.5em" />
      </AddButton>
      <Filter value={filter} onChange={setFilter} />
      <List>
        {isFetching && <Loader />}
        {error && <PageNotFound data={error.data} status={error.status} />}
        {contacts &&
          filtredContact.map(el => (
            <ListItem key={el.id}>
              <Contact id={el.id} items={el} />
            </ListItem>
          ))}
      </List>
    </SectionList>
  );
};
