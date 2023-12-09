import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';  // Import styled for styling

const StyledAppBar = styled(AppBar)({
  position: 'sticky',
  top: 0,
  backgroundColor: 'white',  // Adjust background color as needed
});

function Navigation() {
  return (
    <StyledAppBar>
      <Toolbar>
        <Button component={Link} to="/" color="inherit">
          Home
        </Button>
        <Button component={Link} to="/details" color="inherit">
          Details
        </Button>
      </Toolbar>
    </StyledAppBar>
  );
}

export default Navigation;
