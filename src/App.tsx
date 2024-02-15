import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Button, Grid, ThemeProvider } from '@mui/material';
import { theme } from './theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <div className="container">
      <Grid container spacing={2}>
        <Grid xs={8} spacing={2}>
          <Button variant="text">Primary</Button>
          <Button variant="contained">Primary</Button>
          <Button variant="outlined">Primary</Button>
        </Grid>
        <Grid xs={8}>
          <Button variant="text" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="outlined" color="secondary">
            Secondary
          </Button>
        </Grid>
        <Grid xs={8}>
          <Button variant="text" color="tertiary">
            Tertiary
          </Button>
          <Button variant="contained" color="tertiary">
            Tertiary
          </Button>
          <Button variant="outlined" color="tertiary">
            Tertiary
          </Button>
        </Grid>
      </Grid>
    </div>
  </ThemeProvider>
);
const rootElement = document.getElementById('app');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
