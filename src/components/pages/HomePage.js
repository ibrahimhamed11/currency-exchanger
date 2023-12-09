import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      {/* Use Link instead of href */}
      <Link to="/details">
        <Button variant="contained" color="primary">
          Go to Details Page
        </Button>
      </Link>
    </div>
  );
}

export default HomePage;
