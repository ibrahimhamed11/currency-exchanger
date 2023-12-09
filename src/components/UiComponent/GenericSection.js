import React from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function GenericSection({ title, children }) {
  return (
    <Container maxWidth="xl">
      <Paper elevation={3} sx={{ marginBottom: '1rem' }}>
        <Box sx={{ padding: '1rem', textAlign: 'center', marginTop: '1rem' }}>
          <Typography variant="h5" sx={{ marginBottom: '0.5rem', backgroundColor: '#ccc', padding: '0.5rem' }}>
            {title}
          </Typography>
          {children}
        </Box>
      </Paper>
    </Container>
  );
}

export default GenericSection;
