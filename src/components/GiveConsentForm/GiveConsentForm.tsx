"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { Controller, FormProvider, useForm } from "react-hook-form";

import saveConsentAction from "@/actions/saveConsentAction";
import ConsentsList from "@/components/ConsentsList/ConsentsList";
import { ConsentCatalog } from "@/custom-types/";
import { formSchema, FormSchemaData } from "@/lib/formSchema";

import SubmitButton from "../SubmitButton/SubmitButton";

function GiveConsentForm({
  consentsCatalog,
}: Readonly<{
  consentsCatalog: ConsentCatalog;
}>) {
  const formMethods = useForm<FormSchemaData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      consents: [],
    },
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = formMethods;

  async function onFormSubmit(data: FormSchemaData) {
    const result = await saveConsentAction(data);

    if (!result.success) {
      Object.entries(result.errors).forEach(([key, value]) => {
        setError(key as keyof FormSchemaData, {
          type: "manual",
          message: value[0],
        });
      });
    }
  }

  return (
    <Paper sx={{ p: 3, maxWidth: 900 }}>
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <Stack spacing={2}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Name"
                      error={!!errors.name}
                      helperText={errors.name?.message}
                    />
                  )}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Email"
                      error={!!errors.email}
                      helperText={errors.email?.message}
                    />
                  )}
                />
              </Grid>
            </Grid>

            <ConsentsList consentsCatalog={consentsCatalog} />

            <div>
              <SubmitButton />
            </div>
          </Stack>
        </form>
      </FormProvider>
    </Paper>
  );
}

export default GiveConsentForm;
