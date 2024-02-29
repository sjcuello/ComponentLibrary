import React from 'react';

import './App.css';
import { Typography } from '@mui/material';
import ThemeContainer from '../src/components/ThemeContainer';

function App() {
  return (
    <ThemeContainer>
      <div className="container">
        <Typography variant="h2" gutterBottom align="center">
          It's just a playgorund for MUI components or any other components
        </Typography>
      </div>
    </ThemeContainer>
  );
}

export default App;
