import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";

import getConsentsCatalog from "@/lib/api/getConsentsCatalog";

async function ConsentsList() {
  const consentsCatalog = await getConsentsCatalog();

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">I agree to:</FormLabel>
      <FormGroup>
        {consentsCatalog.map((c) => (
          <FormControlLabel
            key={c.id}
            control={<Checkbox name="consents" />}
            label={c.label}
            value={c.name}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
}

export default ConsentsList;
