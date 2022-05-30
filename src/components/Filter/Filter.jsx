import { TextName, Input } from 'components/ContactForm/ContactForm.styled';
import TextField from '@mui/material/TextField';
import * as React from 'react';

export const Filter = ({ value, onChange }) => {
  return (
    <TextField
      id="outlined-filter"
      label="Find contact by name"
      variant="filled"
      type="text"
      value={value}
      onChange={e => {
        onChange(e.currentTarget.value);
      }}
    />
  );
};
