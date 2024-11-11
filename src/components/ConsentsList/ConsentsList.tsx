import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";

import type { ConsentCatalog } from "@/custom-types/";

function ConsentsList({
  consentsChecked,
  consentsCatalog,
  handleChange,
}: {
  consentsChecked: string[];
  consentsCatalog: ConsentCatalog;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean,
  ) => void;
}) {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">I agree to:</FormLabel>
      <FormGroup>
        {consentsCatalog.map((c) => (
          <FormControlLabel
            key={c.id}
            control={
              <Checkbox
                name="consents"
                onChange={handleChange}
                checked={consentsChecked.includes(c.name)}
              />
            }
            label={c.label}
            value={c.name}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
}

export default ConsentsList;
