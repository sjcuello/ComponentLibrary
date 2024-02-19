import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Button, Grid, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import EnhancedTable from './components/Table';
import DataGridProDemo from './components/DataGrid';
import TabsMUI, { TabContent } from './components/Tab';

const tabArray: TabContent[] = [
  {
    title: '🎹 Buttons',
    children: (
      <Grid container spacing={2}>
        <Grid xs={12} spacing={2}>
          <Button sx={{ margin: '1rem' }} variant="text">
            Primary
          </Button>
          <Button sx={{ margin: '1rem' }} variant="contained">
            Primary
          </Button>
          <Button sx={{ margin: '1rem' }} disabled={true} variant="contained">
            Primary
          </Button>
          <Button sx={{ margin: '1rem' }} variant="outlined">
            Primary
          </Button>
          <Button sx={{ margin: '1rem' }} disabled={true} variant="outlined">
            Primary
          </Button>
        </Grid>
        <Grid xs={12}>
          <Button sx={{ margin: '1rem' }} variant="contained" color="secondary">
            Secondary
          </Button>
          <Button
            sx={{ margin: '1rem' }}
            disabled={true}
            variant="contained"
            color="secondary">
            Secondary
          </Button>
        </Grid>
        <Grid xs={12}>
          <Button sx={{ margin: '1rem' }} variant="contained" color="tertiary">
            Tertiary
          </Button>
          <Button
            sx={{ margin: '1rem' }}
            disabled={true}
            variant="contained"
            color="tertiary">
            Tertiary
          </Button>
        </Grid>
      </Grid>
    ),
  },
  { title: '📦 Simple Table', children: <EnhancedTable /> },
  { title: '⚡️ Data Grid', children: <DataGridProDemo /> },
];

const App = () => (
  <ThemeProvider theme={theme}>
    <div className="container">
      <TabsMUI tabArray={tabArray} />
    </div>
  </ThemeProvider>
);
const rootElement = document.getElementById('app');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
