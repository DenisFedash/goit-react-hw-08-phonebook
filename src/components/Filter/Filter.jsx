import TextField from '@mui/material/TextField';
import * as React from 'react';

export const Filter = ({ value, onChange }) => {
  return (
    <TextField
      style={{ paddingBottom: '20px' }}
      id="standard-required"
      label="Find contact by name"
      variant="standard"
      type="text"
      value={value}
      onChange={e => {
        onChange(e.currentTarget.value);
      }}
    />
  );
};
