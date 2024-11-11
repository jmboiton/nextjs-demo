import { render, screen } from "@testing-library/react";

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

describe("ConsentList", () => {
  test("should display the labels of each consent", async () => {
    expect.hasAssertions();

    render(
      <ConsentsList
        consentsCatalog={demoConsentsCatalog}
        consentsChecked={[]}
        handleChange={() => {}}
      />,
    );

    expect(screen.getByText("Receive newsletter")).toBeDefined();
    expect(screen.getByText("Be shown targeted ads")).toBeDefined();
  });
});
