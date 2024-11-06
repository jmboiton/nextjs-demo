import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

import getConsentsCatalog from "@/lib/api/getConsentsCatalog";

export default async function GiveConsent() {
  const consentsCatalog = await getConsentsCatalog();

  return (
    <div>
      <main>
        <Box sx={{ p: 3 }}>
          <Typography variant="h1">Give Consent</Typography>
          <Typography>Select a consent from the following list:</Typography>
          <List dense>
            {consentsCatalog.map((c) => (
              <ListItem key={c.id}>
                <ListItemText primary={c.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </main>
    </div>
  );
}
