import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import ConsentsList from "@/components/ConsentsList/ConsentsList";

export default function GiveConsent() {
  return (
    <div>
      <main>
        <Box sx={{ p: 3 }}>
          <Typography variant="h1">Give Consent</Typography>
          <Typography>Select a consent from the following list:</Typography>
          <ConsentsList />
        </Box>
      </main>
    </div>
  );
}
