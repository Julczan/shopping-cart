import { describe, expect, it } from "vitest";
import routes from "../src/routes";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router";
import userEvent from "@testing-library/user-event";

describe("Router", () => {
  it("Show the right page", async () => {
    const router = createMemoryRouter(routes);
    const user = userEvent.setup();
    render(<RouterProvider router={router} />);

    const shopLink = screen.getByRole("link", { name: /shop page/i });

    expect(shopLink).toBeInTheDocument();
    await user.click(shopLink);

    expect(
      screen.getByRole("heading", { name: /shop page/i }),
    ).toBeInTheDocument();
  });
});
