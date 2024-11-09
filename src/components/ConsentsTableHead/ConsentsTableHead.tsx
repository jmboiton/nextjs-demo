import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function ConsentsTableHead() {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>Consent given for</TableCell>
      </TableRow>
    </TableHead>
  );
}

export default ConsentsTableHead;
