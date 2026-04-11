import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router";
import routes from "../src/routes";
import userEvent from "@testing-library/user-event";

window.fetch = vi.fn(() => {
  const shopData = [
    {
      images: ["shoesImage"],
      title: "Shoes",
      price: 20,
      id: 1,
      description: "lorem",
    },
    {
      images: ["hatImage"],
      title: "Hat",
      price: 5,
      id: 2,
      description: "A hat",
    },
  ];

  return Promise.resolve({
    json: () => Promise.resolve(shopData),
  });
});
describe("Navigation bar", () => {
  it("Has 3 buttons for navigation", () => {
    const router = createMemoryRouter(routes, { initialEntries: ["/shop"] });
    render(<RouterProvider router={router} />);

    expect(screen.getAllByRole("link")).toHaveLength(3);
  });

  it("Displays the number of items in cart", async () => {
    const user = userEvent.setup();
    const router = createMemoryRouter(routes, { initialEntries: ["/shop"] });
    render(<RouterProvider router={router} />);

    const addToCartBtns = await screen.findAllByRole("button", {
      name: /add to cart/i,
    });
    const inputNumbers = await screen.findAllByRole("spinbutton");

    await user.type(inputNumbers[0], "{backspace}33");

    await user.click(addToCartBtns[0]);

    const CartItemsQty = await screen.findByText("1");

    expect(CartItemsQty).toBeInTheDocument();
  });
});
