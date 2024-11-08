import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import GiveConsentForm from "@/components/GiveConsentForm/GiveConsentForm";

export default function GiveConsentPage() {
  return (
    <div>
      <main>
        <Box sx={{ p: 3 }}>
          <Typography variant="h1">Give Consent</Typography>
          <GiveConsentForm />
        </Box>
      </main>
    </div>
  );
}
