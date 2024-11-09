import getConsents from "@/lib/api/getConsents";

import ConsentsTableHead from "../ConsentsTableHead/ConsentsTableHead";
import ConsentsTablePagination from "../ConsentsTablePagination/ConsentsTablePagination";

async function ConsentsTable() {
  const consents = await getConsents();

  return (
    <ConsentsTablePagination consents={consents}>
      <ConsentsTableHead />
    </ConsentsTablePagination>
  );
}

export default ConsentsTable;
