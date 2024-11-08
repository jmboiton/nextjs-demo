import ApprovalIcon from "@mui/icons-material/Approval";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

import saveConsentAction from "../../actions/saveConsentAction";
import ConsentsList from "../ConsentsList/ConsentsList";

function GiveConsentForm() {
  return (
    <form action={saveConsentAction}>
      <Stack spacing={2}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 6 }}>
            <TextField fullWidth label="Name" name="name" />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField fullWidth label="Email" type="email" name="email" />
          </Grid>
        </Grid>

        <ConsentsList />

        <div>
          <Button type="submit" variant="contained" endIcon={<ApprovalIcon />}>
            Give Consent
          </Button>
        </div>
      </Stack>
    </form>
  );
}

export default GiveConsentForm;
