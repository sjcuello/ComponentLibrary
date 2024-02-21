import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ThemeContainer from './components/ThemeContainer';
import { Typography } from '@mui/material';

const App = () => (
  <ThemeContainer>
    <div className="container">
      <Typography variant="h2" gutterBottom align="center">
        It's just a playgorund for MUI components or any other components
      </Typography>
    </div>
  </ThemeContainer>
);
const rootElement = document.getElementById('app');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
