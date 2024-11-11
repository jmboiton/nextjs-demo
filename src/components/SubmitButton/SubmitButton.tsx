import ApprovalIcon from "@mui/icons-material/Approval";
import Button from "@mui/material/Button";
import { useFormContext } from "react-hook-form";

import { FormSchemaData } from "@/lib/formSchema";

function SubmitButton() {
  const { watch } = useFormContext<FormSchemaData>();

  const consents = watch("consents");
  const isSubmitDisabled = consents.length === 0;

  return (
    <Button
      type="submit"
      variant="contained"
      disabled={isSubmitDisabled}
      endIcon={<ApprovalIcon />}
    >
      Give Consent
    </Button>
  );
}

export default SubmitButton;
