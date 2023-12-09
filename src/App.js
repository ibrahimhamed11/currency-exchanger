import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import DetailsPage from './components/pages/DetailsPage';
import Navigation from './components/Nav';  // Import Navigation
import { createTheme, ThemeProvider } from '@mui/material/styles';  // Import ThemeProvider

const theme = createTheme();  // Create a Material-UI theme

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details" element={<DetailsPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
