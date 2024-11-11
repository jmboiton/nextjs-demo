import { render, screen } from "@testing-library/react";
import type { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { ConsentCatalog } from "@/custom-types/";

import ConsentsList from "./ConsentsList";

const demoConsentsCatalog = [
  {
    id: 1,
    name: "newsletter",
    label: "Receive newsletter",
  },
  {
    id: 2,
    name: "ads",
    label: "Be shown targeted ads",
  },
] as ConsentCatalog;

function FormWrapper({ children }: { children: ReactNode }) {
  const methods = useForm({
    defaultValues: {
      consents: [],
    },
  });

  return <FormProvider {...methods}>{children}</FormProvider>;
}

describe("ConsentList", () => {
  test("should display the labels of each consent", async () => {
    expect.hasAssertions();

    render(
      <FormWrapper>
        <ConsentsList consentsCatalog={demoConsentsCatalog} />
      </FormWrapper>,
    );

    expect(screen.getByText("Receive newsletter")).toBeDefined();
    expect(screen.getByText("Be shown targeted ads")).toBeDefined();
  });
});
