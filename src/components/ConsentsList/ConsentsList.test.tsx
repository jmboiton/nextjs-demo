import { render, screen } from "@testing-library/react";

import ConsentsList from "./ConsentsList";

vi.mock("@/lib/api/getConsentsCatalog", () => {
  return {
    default: vi.fn().mockResolvedValue([
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
    ]),
  };
});

test("ConentList", async () => {
  expect.hasAssertions();
  render(await ConsentsList());

  expect(screen.getByText("Receive newsletter")).toBeDefined();
  expect(screen.getByText("Be shown targeted ads")).toBeDefined();
});
