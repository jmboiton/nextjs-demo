"use client";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { type ReactNode, useState } from "react";

import ConsentsTableBody from "@/components/ConsentsTableBody/ConsentsTableBody";
import type { Consent } from "@/custom-types/";

function ConsentsTablePagination({
  children,
  consents,
}: Readonly<{ children: ReactNode; consents: Consent[] }>) {
  const [page, setPage] = useState<number>(0);
  const rowsPerPage = 2;
  const currentConsents = consents.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage,
  );

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        {children}
        <ConsentsTableBody consents={currentConsents} />
        <TableFooter>
          <TableRow>
            <TablePagination
              count={consents.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPageOptions={[]}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

export default ConsentsTablePagination;
