import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import getConsentsCatalog from "@/lib/api/getConsentsCatalog";

async function ConsentsList() {
  const consentsCatalog = await getConsentsCatalog();

  return (
    <List dense>
      {consentsCatalog.map((c) => (
        <ListItem key={c.id}>
          <ListItemText primary={c.label} />
        </ListItem>
      ))}
    </List>
  );
}

export default ConsentsList;
