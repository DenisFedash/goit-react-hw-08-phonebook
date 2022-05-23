import { TextName, Input } from 'components/ContactForm/ContactForm.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <TextName>
      Find contact by name
      <Input
        type="text"
        value={value}
        onChange={e => {
          onChange(e.currentTarget.value);
        }}
      />
    </TextName>
  );
};
