import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGridPro, GridToolbar } from '@mui/x-data-grid-pro';
import { useDemoData } from '@mui/x-data-grid-generator';

export default function DataGridProDemo() {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
    editable: true,
  });
  console.log('data', data);

  return (
    <Box sx={{ height: 520, width: '100%' }}>
      <DataGridPro
        {...data}
        loading={data.rows.length === 0}
        rowHeight={38}
        checkboxSelection
        disableRowSelectionOnClick
        initialState={{
          ...data.initialState,
          pinnedColumns: { left: ['desk', 'commodity'] },
        }}
        slots={{ toolbar: GridToolbar }}
      />
    </Box>
  );
}
