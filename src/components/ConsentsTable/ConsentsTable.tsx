import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import getConsents from "@/lib/api/getConsents";

async function ConsentsTable() {
  const consents = await getConsents();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Consent given for</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {consents.map((c) => (
            <TableRow key={c.email}>
              <TableCell>{c.name}</TableCell>
              <TableCell>{c.email}</TableCell>
              <TableCell>{c.consents.join(", ")}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ConsentsTable;
