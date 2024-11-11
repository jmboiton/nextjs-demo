"use client";

import ApprovalIcon from "@mui/icons-material/Approval";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";

import saveConsentAction from "@/actions/saveConsentAction";
import ConsentsList from "@/components/ConsentsList/ConsentsList";
import { ConsentCatalog } from "@/custom-types/";

function GiveConsentForm({
  consentsCatalog,
}: Readonly<{
  consentsCatalog: ConsentCatalog;
}>) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [consents, setConsents] = useState<string[]>([]);
  const isSubmitDisabled = consents.length === 0;

  function handleConsentOptionChange(
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    const value = event.target.value;
    if (event.target.checked) {
      setConsents([...consents, value]);
    } else {
      setConsents(consents.filter((item) => item != value));
    }
  }

  /* async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    console.log({name, email, consents})
  } */

  return (
    <Paper sx={{ p: 3, maxWidth: 900 }}>
      <form action={saveConsentAction}>
        <Stack spacing={2}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                required
                fullWidth
                label="Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                required
                fullWidth
                label="Email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
          </Grid>

          <ConsentsList
            consentsCatalog={consentsCatalog}
            consentsChecked={consents}
            handleChange={handleConsentOptionChange}
          />

          <div>
            <Button
              type="submit"
              variant="contained"
              disabled={isSubmitDisabled}
              endIcon={<ApprovalIcon />}
            >
              Give Consent
            </Button>
          </div>
        </Stack>
      </form>
    </Paper>
  );
}

export default GiveConsentForm;
