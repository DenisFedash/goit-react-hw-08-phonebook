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
      <Container maxWidth="1024">
        <Box
          sx={{ bgcolor: '#cfe8fc', height: '100vh' }}
          style={{ position: 'relative' }}
        >
          {children}
        </Box>
      </Container>
    </React.Fragment>
  );
};
