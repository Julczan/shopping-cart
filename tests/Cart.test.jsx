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

describe("Cart Page", () => {
  it("Shows text when cart is empty", async () => {
    const router = createMemoryRouter(routes, { initialEntries: ["/cart"] });
    render(<RouterProvider router={router} />);

    const emptyCartText = await screen.findByText("No items found.");

    expect(emptyCartText).toBeInTheDocument();
  });

  it("Increments and decrements product's quantity on click", async () => {
    const user = userEvent.setup();
    const router = createMemoryRouter(routes, { initialEntries: ["/shop"] });
    render(<RouterProvider router={router} />);

    const cartLink = screen.getByRole("link", { name: /cart/i });

    const addToCartBtns = await screen.findAllByRole("button", {
      name: /add to cart/i,
    });

    await user.click(addToCartBtns[0]);
    await user.click(cartLink);

    const incrementBtn = await screen.findByRole("button", {
      name: /increment/i,
    });
    const decrementBtn = await screen.findByRole("button", {
      name: /decrement/i,
    });
    const quantity = await screen.findByText("Qty: 1");
    const price = await screen.findByText("20 $");

    await user.click(incrementBtn);

    expect(quantity).toHaveTextContent("Qty: 2");
    expect(price).toHaveTextContent("40 $");

    await user.click(decrementBtn);

    expect(quantity).toHaveTextContent("Qty: 1");
    expect(price).toHaveTextContent("20 $");
  });

  it("Stops decremeting when quantity is out of range", async () => {
    const user = userEvent.setup();
    const router = createMemoryRouter(routes, { initialEntries: ["/shop"] });
    render(<RouterProvider router={router} />);

    const cartLink = screen.getByRole("link", { name: /cart/i });

    const addToCartBtns = await screen.findAllByRole("button", {
      name: /add to cart/i,
    });

    await user.click(addToCartBtns[0]);
    await user.click(cartLink);

    const decrementBtn = await screen.findByRole("button", {
      name: /decrement/i,
    });

    const quantity = await screen.findByText("Qty: 1");

    await user.click(decrementBtn);
    expect(quantity).toHaveTextContent("Qty: 1");
  });

  it("Stops decremeting when quantity is out of range", async () => {
    const user = userEvent.setup();
    const router = createMemoryRouter(routes, { initialEntries: ["/shop"] });
    render(<RouterProvider router={router} />);

    const cartLink = screen.getByRole("link", { name: /cart/i });

    const addToCartBtns = await screen.findAllByRole("button", {
      name: /add to cart/i,
    });

    const inputNumbers = await screen.findAllByRole("spinbutton");

    await user.type(inputNumbers[0], "{backspace}99");

    await user.click(addToCartBtns[0]);
    await user.click(cartLink);

    const incrementBtn = await screen.findByRole("button", {
      name: /increment/i,
    });

    const quantity = await screen.findByText("Qty: 99");

    await user.click(incrementBtn);
    expect(quantity).toHaveTextContent("Qty: 99");
  });
});

describe("Order Summary", () => {
  it("Displays the summed price of items in Cart", async () => {
    const user = userEvent.setup();
    const router = createMemoryRouter(routes, { initialEntries: ["/shop"] });
    render(<RouterProvider router={router} />);

    const cartLink = screen.getByRole("link", { name: /cart/i });

    const addToCartBtns = await screen.findAllByRole("button", {
      name: /add to cart/i,
    });

    const inputNumbers = await screen.findAllByRole("spinbutton");

    await user.type(inputNumbers[0], "{backspace}20");
    await user.type(inputNumbers[1], "{backspace}10");

    await user.click(addToCartBtns[0]);
    await user.click(addToCartBtns[1]);
    await user.click(cartLink);

    const priceSum = await screen.findByText("450 $");

    expect(priceSum).toBeInTheDocument();
  });
});
