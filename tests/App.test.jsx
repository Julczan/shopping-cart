import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../src/App";
import { createMemoryRouter, MemoryRouter, RouterProvider } from "react-router";
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

describe("App component", () => {
  it("Contains navigation bar", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("Adds product to cart on AddToCart Button click", async () => {
    const user = userEvent.setup();
    const router = createMemoryRouter(routes, { initialEntries: ["/shop"] });
    render(<RouterProvider router={router} />);

    const cartLink = screen.getByRole("link", { name: /cart/i });

    const addToCartBtns = await screen.findAllByRole("button", {
      name: /add to cart/i,
    });

    await user.click(addToCartBtns[0]);

    await user.click(cartLink);

    const cartItem = await screen.findByText("Shoes");

    expect(cartItem).toBeInTheDocument();
  });

  it("Does not add product to cart on AddToCart Button click when quantity is out of range", async () => {
    const user = userEvent.setup();
    const router = createMemoryRouter(routes, { initialEntries: ["/shop"] });
    render(<RouterProvider router={router} />);

    const cartLink = screen.getByRole("link", { name: /cart/i });

    const addToCartBtns = await screen.findAllByRole("button", {
      name: /add to cart/i,
    });
    const decrementBtns = await screen.findAllByRole("button", {
      name: /decrement/i,
    });
    const inputNumbers = await screen.findAllByRole("spinbutton");

    await user.type(inputNumbers[0], "{backspace}512");
    await user.click(addToCartBtns[0]);

    await user.click(decrementBtns[1]);
    await user.click(addToCartBtns[0]);

    await user.click(cartLink);

    const cart = await screen.findByText("No items found.");

    expect(inputNumbers[0]).toHaveValue(512);
    expect(inputNumbers[1]).toHaveValue(0);
    expect(cart).toBeInTheDocument();
  });
});
