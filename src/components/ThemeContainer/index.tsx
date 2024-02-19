import { ThemeProvider } from '@mui/material';
import React from 'react';
import { theme } from '../../theme';

interface ThemeContainerProps {
  children: React.ReactNode;
}

const ThemeContainer = ({ children }: ThemeContainerProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeContainer;
