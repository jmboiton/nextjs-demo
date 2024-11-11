import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import GiveConsentForm from "@/components/GiveConsentForm/GiveConsentForm";
import getConsentsCatalog from "@/lib/api/getConsentsCatalog";

export default async function GiveConsentPage() {
  const consentsCatalog = await getConsentsCatalog();

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h1" gutterBottom>
        Give Consent
      </Typography>
      <GiveConsentForm consentsCatalog={consentsCatalog} />
    </Box>
  );
}
