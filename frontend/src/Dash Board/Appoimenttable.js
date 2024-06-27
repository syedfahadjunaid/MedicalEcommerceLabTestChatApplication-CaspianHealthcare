import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import React from 'react'
import './Appoimenttable.css'
const columns = [
    { id: 'name', label: 'Time', minWidth: 170 },
    { id: 'code', label: 'Date', minWidth: 100 },
    {
      id: 'population',
      label: 'Patients',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'size',
      label: 'Address',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'density',
      label: 'Phone',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toFixed(2),
    },  {
      id: 'doctor',
      label: 'Doctor',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toFixed(2),
    },
  ];
  
  function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
  }
  
  const rows = [
    createData('07:00', '01 -03-2023', 'Michael R Sheets','226001 Lucknow, way  ', "+91 4545452535"),
    createData('07:00', '01 -03-2023', "Michael R Sheets",'226001 Lucknow, way  ', "+91 4545452535"),
    createData('07:00', '01 -03-2023', "Michael R Sheets",'226001 Lucknow, way  ', "+91 4545452535"),
    createData('07:00 States', '01 -03-2023', "Michael R Sheets",'226001 Lucknow, way  ', "+91 4545452535"),
    createData('07:00', '01 -03-2023', "Michael R Sheets",'226001 Lucknow, way  ', "+91 4545452535"),
    createData('07:00', '01 -03-2023', "Michael R Sheets",'226001 Lucknow, way  ', "+91 4545452535"),
    createData('07:00', '01 -03-2023', "Michael R Sheets",'226001 Lucknow, way  ', "+91 4545452535"),
    createData('07:00', '01 -03-2023', "Michael R Sheets",'226001 Lucknow, way  ', "+91 4545452535"),
    createData('07:00', '01 -03-2023', "Michael R Sheets",'226001 Lucknow, way  ', "+91 4545452535"),
    createData('07:00', '01 -03-2023', "Michael R Sheets",'226001 Lucknow, way  ', "+91 4545452535"),
    createData('07:00', '01 -03-2023', "Michael R Sheets",'226001 Lucknow, way  ', "+91 4545452535"),
    createData('07:00 ', '01 -03-2023', "Michael R Sheets",'226001 Lucknow, way  ', "+91 4545452535"),
    createData('07:00', '01 -03-2023', "Michael R Sheets",'226001 Lucknow, way  ', "+91 4545452535"),
    createData('07:00', '01 -03-2023', "Michael R Sheets",'226001 Lucknow, way  ', "+91 4545452535"),
    createData('07:00', '01 -03-2023', "Michael R Sheets",'226001 Lucknow, way  ', "+91 4545452535"),
  ];
function Appoimenttable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
  
    return (
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    );
}

export default Appoimenttable