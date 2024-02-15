import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Button, ThemeProvider } from '@mui/material';
import { theme } from './theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <div className="container">
      <div>Name: ComponentLibrary</div>
      <div>Framework: react</div>
      <div>Language: TypeScript</div>
      <div>CSS: Empty CSS</div>
      <Button variant="contained">Primary</Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" color="tertiary">
        Tertiary
      </Button>
    </div>
  </ThemeProvider>
);
const rootElement = document.getElementById('app');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
