import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router";
import userEvent from "@testing-library/user-event";
import routes from "../src/routes";

describe("Cart Page", () => {
  it("Shows text when cart is empty", async () => {
    const router = createMemoryRouter(routes);
    const user = userEvent.setup();
    render(<RouterProvider router={router} />);

    const cartPage = screen.getByRole("link", { name: /cart/i });

    await user.click(cartPage);

    const emptyCartText = await screen.findByText("No items found.");

    expect(emptyCartText).toBeInTheDocument();
  });
});
