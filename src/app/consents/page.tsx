import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import ConsentsTable from "@/components/ConsentsTable/ConsentsTable";

export default function ConsentsPage() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h1" gutterBottom>
        Collected Consents
      </Typography>
      <ConsentsTable />
    </Box>
  );
}
