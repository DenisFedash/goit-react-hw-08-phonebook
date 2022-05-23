import { ButtonList } from 'components/ContactList/ContactList.styled';
import toast from 'react-hot-toast';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { useDeleteContactMutation } from 'redux/contacts';
import PropTypes from 'prop-types';

export const Contact = ({ items }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const deleteSelectedContact = () => {
    deleteContact(items.id);
    toast.success(`The ${items.name} has been removed from your list.`);
  };
  return (
    <>
      <p>
        {items.name}: {items.phone}
      </p>
      <ButtonList
        type="button"
        onClick={deleteSelectedContact}
        disabled={isLoading}
      >
        <RiDeleteBin6Fill size="1.3em" />
      </ButtonList>
    </>
  );
};

Contact.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};
