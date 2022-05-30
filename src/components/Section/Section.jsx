// import PropTypes from 'prop-types';
// import { PhoneSection } from './Section.styled';

// export const Section = ({ children }) => {
//   return <PhoneSection>{children}</PhoneSection>;
// };

// Section.propTypes = {
//   children: PropTypes.node.isRequired,
// };

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export const Section = ({ children }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="1200">
        <Box
          style={{
            height: '100vh',
            paddingTop: '50px',
            paddingBottom: '50px',
          }}
        >
          {children}
        </Box>
      </Container>
    </React.Fragment>
  );
};
