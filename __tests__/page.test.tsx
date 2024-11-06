import { render, screen } from "@testing-library/react";

import Page from "@/app/give-consent/page";

test("Page", () => {
  render(<Page />);
  expect(
    screen.getByRole("heading", {
      level: 1,
      name: "Next.JS Demo",
    }),
  ).toBeDefined();
});
