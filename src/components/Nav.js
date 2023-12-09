import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';  
import GenericButton from './UiComponent/Buttons';
import LogoImage from '../Assets/images/logo.png';

const StyledAppBar = styled(AppBar)({
  position: 'sticky',
  top: 0,
  backgroundColor: '#ccc',  
});

const HeaderContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 16px',  
});

const LogoContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const Logo = styled('img')({
  maxWidth: '55px',
  height: '55px',
});

const NavLinksContainer = styled('div')({
  display: 'flex',
  gap: '1rem',
});

function Navigation() {
  const handleButtonClick = () => {
    console.log('Button Clicked');
  };

  return (
    <StyledAppBar>
      <Toolbar>
        <HeaderContainer>
          <NavLinksContainer>
            <Box sx={{ marginLeft: 'auto', padding: '0.5rem' }}>
              <Logo src={LogoImage} alt="Logo" />
            </Box>
          </NavLinksContainer>
        </HeaderContainer>
        <Box sx={{ marginLeft: 'auto', padding: '0.5rem' }}>
          <GenericButton text="EUR-USD Details" onClick={handleButtonClick} color="success" sx={{ marginRight: '0.5rem' }} />
          <GenericButton text="EUR-GBP Details" onClick={handleButtonClick} color="success" sx={{ marginRight: '0.5rem' }} />
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
}

export default Navigation;
