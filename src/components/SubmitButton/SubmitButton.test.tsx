import { render, screen } from "@testing-library/react";
import type { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";

import SubmitButton from "./SubmitButton";

function FormWrapper({
  children,
  defaultConsents = [],
}: Readonly<{ children: ReactNode; defaultConsents?: string[] }>) {
  const methods = useForm({
    defaultValues: {
      consents: defaultConsents,
    },
  });

  return <FormProvider {...methods}>{children}</FormProvider>;
}

describe("SubmitButton", () => {
  test("disable the submit button when there are no consents checked", () => {
    expect.hasAssertions();

    render(
      <FormWrapper>
        <SubmitButton />
      </FormWrapper>,
    );

    const submitBtn = screen.getByRole("button", {
      name: /give consent/i,
    });

    expect(submitBtn).toBeDisabled();
  });

  test("enable the submit button when there are at least one consent checked", () => {
    render(
      <FormWrapper defaultConsents={["ads"]}>
        <SubmitButton />
      </FormWrapper>,
    );

    const submitBtn = screen.getByRole("button", {
      name: /give consent/i,
    });

    expect(submitBtn).toBeEnabled();
  });
});
