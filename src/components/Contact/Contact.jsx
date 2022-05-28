import { ButtonList } from 'components/ContactList/ContactList.styled';
import toast from 'react-hot-toast';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { useDeleteContactMutation } from 'redux/contacts';
import PropTypes from 'prop-types';
import { Spinner } from 'components/Spinner/Spinner';

export const Contact = ({ items }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const deleteSelectedContact = () => {
    deleteContact(items.id);
    toast.success(`The ${items.name} has been removed from your list.`);
  };
  return (
    <>
      <p>
        {items.name}: {items.number}
      </p>
      <ButtonList
        type="button"
        onClick={deleteSelectedContact}
        disabled={isLoading}
      >
        {isLoading ? <Spinner /> : <RiDeleteBin6Fill size="1.3em" />}
      </ButtonList>
    </>
  );
};

Contact.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
