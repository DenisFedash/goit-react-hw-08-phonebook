import toast from 'react-hot-toast';
import { useDeleteContactMutation } from 'redux/contacts';
import PropTypes from 'prop-types';
import { Spinner } from 'components/Spinner/Spinner';
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import Avatar from '@mui/material/Avatar';

export function Contact({ items }) {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const deleteSelectedContact = () => {
    deleteContact(items.id);
    toast.success(`The ${items.name} has been removed from your list.`);
  };

  return (
    <Box
      sx={{ flexGrow: 1, maxWidth: 600 }}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '5px',
      }}
    >
      <Avatar />
      <Typography variant="h6" component="div">
        {items.name}: {items.number}
      </Typography>
      <IconButton
        edge="end"
        aria-label="delete"
        onClick={deleteSelectedContact}
        disabled={isLoading}
      >
        {isLoading ? <Spinner /> : <DeleteIcon />}
      </IconButton>
    </Box>
  );
}

Contact.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
