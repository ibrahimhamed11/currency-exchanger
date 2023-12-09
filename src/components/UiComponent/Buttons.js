import React from 'react';
import Button from '@mui/material/Button';

function GenericButton({ text, onClick, color, sx }) {
  return (
    <Button variant="contained" color={color} onClick={onClick} sx={{ margin: '0.5rem', ...sx }}>
      {text}
    </Button>
  );
}

export default GenericButton;
