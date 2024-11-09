import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

import type { Consent } from "@/custom-types/";

function ConsentsTableBody({ consents }: Readonly<{ consents: Consent[] }>) {
  return (
    <TableBody>
      {consents.map((c) => (
        <TableRow key={c.email}>
          <TableCell>{c.name}</TableCell>
          <TableCell>{c.email}</TableCell>
          <TableCell>{c.consents.join(", ")}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}

export default ConsentsTableBody;
