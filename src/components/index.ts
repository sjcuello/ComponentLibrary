import { Button as ButtonMUI, Grid as GridMUI } from './MUI';
import DataGrid from './DataGrid';
import Tab from './Tab';
import Table from './Table';
import ApplyHOC from '../utils/applyHOC';

// ApplyHOC is a higher order component that applies the theme to the component
const Button = ApplyHOC(ButtonMUI);
const Grid = ApplyHOC(GridMUI);

export { Button, Grid, DataGrid, Tab, Table };
