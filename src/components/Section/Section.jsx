import PropTypes from 'prop-types';
import { PhoneSection } from './Section.styled';

export const Section = ({ children }) => {
  return <PhoneSection>{children}</PhoneSection>;
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};
