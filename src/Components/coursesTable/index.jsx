import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

function CoursesTable() {
  return <>
    <Box sx={{ width: '100%', overflowX: 'auto', mt: 3 }}>
      <h1 className="text-3xl text-center mb-3">Current Courses</h1>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ background: '#90caf9', color: 'black' }}>Course Name</TableCell>
              <TableCell align="center" sx={{ background: '#90caf9', color: 'black' }}>Total Teacher</TableCell>
              <TableCell align="center" sx={{ background: '#90caf9', color: 'black' }}>Total Students</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center" sx={{ background: '#e3f2fd', color: 'black' }}>Course A</TableCell>
              <TableCell align="center" sx={{ background: '#e3f2fd', color: 'black' }}>10</TableCell>
              <TableCell align="center" sx={{ background: '#e3f2fd', color: 'black' }}>100</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
    <Box sx={{ width: '100%', overflowX: 'auto', mt: 3 }}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ background: '#90caf9', color: 'black' }}>Course Name</TableCell>
              <TableCell align="center" sx={{ background: '#90caf9', color: 'black' }}>Total Teacher</TableCell>
              <TableCell align="center" sx={{ background: '#90caf9', color: 'black' }}>Total Students</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center" sx={{ background: '#e3f2fd', color: 'black' }}>Course A</TableCell>
              <TableCell align="center" sx={{ background: '#e3f2fd', color: 'black' }}>10</TableCell>
              <TableCell align="center" sx={{ background: '#e3f2fd', color: 'black' }}>100</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>

  </>

}

export default CoursesTable;
