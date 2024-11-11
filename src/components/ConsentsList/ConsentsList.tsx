import { FormHelperText } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import {
  Controller,
  ControllerRenderProps,
  useFormContext,
} from "react-hook-form";

import type { ConsentCatalog, ConsentName } from "@/custom-types/";
import { FormSchemaData } from "@/lib/formSchema";

function ConsentsList({
  consentsCatalog,
}: Readonly<{
  consentsCatalog: ConsentCatalog;
}>) {
  const {
    formState: { errors },
    control,
  } = useFormContext<FormSchemaData>();

  function handleChange(
    field: ControllerRenderProps<FormSchemaData, "consents">,
    optionValue: ConsentName,
  ) {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      const updateConsents = event.target.checked
        ? [...field.value, optionValue]
        : field.value.filter((item) => item !== optionValue);

      field.onChange(updateConsents);
    };
  }

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">I agree to:</FormLabel>
      <FormGroup>
        <Controller
          name="consents"
          control={control}
          render={({ field }) => (
            <>
              {consentsCatalog.map((option) => (
                <FormControlLabel
                  key={option.id}
                  control={
                    <Checkbox
                      checked={field.value.includes(option.name)}
                      onChange={handleChange(field, option.name)}
                    />
                  }
                  label={option.label}
                  value={option.name}
                />
              ))}
              {errors.consents && (
                <FormHelperText error>{errors.consents.message}</FormHelperText>
              )}
            </>
          )}
        />
      </FormGroup>
    </FormControl>
  );
}

export default ConsentsList;
