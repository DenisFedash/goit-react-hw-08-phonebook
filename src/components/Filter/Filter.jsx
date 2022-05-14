import { TextName, Input } from 'components/ContactForm/ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, getFilter } from 'redux/valueSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <TextName>
      Find contact by name
      <Input
        type="text"
        value={filter}
        onChange={e => {
          dispatch(changeFilter(e.currentTarget.value));
        }}
      />
    </TextName>
  );
};
