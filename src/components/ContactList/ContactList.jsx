import PropTypes from 'prop-types';
import { List, ListItem, ButtonList, SectionList } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getContacts, getFilter } from 'redux/valueSlice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filtredContact = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filtredContactList = filtredContact();

  return (
    <SectionList>
      <List>
        {filtredContactList.map(({ id, name, number }) => (
          <ListItem key={id}>
            <p>
              {name}: {number}
            </p>
            <ButtonList
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </ButtonList>
          </ListItem>
        ))}
      </List>
    </SectionList>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
