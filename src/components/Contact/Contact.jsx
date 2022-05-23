import { ButtonList } from 'components/ContactList/ContactList.styled';
import toast from 'react-hot-toast';

import { useDeleteContactMutation } from 'redux/contacts';

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
        Delete
      </ButtonList>
    </>
  );
};
