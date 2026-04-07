import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router";
import routes from "../src/routes";

describe("Cart Page", () => {
  it("Shows text when cart is empty", async () => {
    const router = createMemoryRouter(routes, { initialEntries: ["/cart"] });
    render(<RouterProvider router={router} />);

    const emptyCartText = await screen.findByText("No items found.");

    expect(emptyCartText).toBeInTheDocument();
  });
});
