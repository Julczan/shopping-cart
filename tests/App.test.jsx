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
    const router = createMemoryRouter(routes);
    const user = userEvent.setup();
    render(<RouterProvider router={router} />);

    const shopLink = screen.getByRole("link", { name: /shop page/i });
    const cartLink = screen.getByRole("link", { name: /cart/i });

    await user.click(shopLink);

    const addToCartBtns = await screen.findAllByRole("button", {
      name: /add to cart/i,
    });

    await user.click(addToCartBtns[0]);

    await user.click(cartLink);

    const cartItem = await screen.findByText("Shoes");

    expect(cartItem).toBeInTheDocument();
  });
});
