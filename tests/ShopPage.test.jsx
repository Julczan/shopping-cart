import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import ShopPage from "../src/components/ShopPage/ShopPage";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";

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

describe("Shop Page", () => {
  it("Displays loading component while API request is in progress", () => {
    render(<ShopPage />);
    const loading = screen.getByText("Loading...");

    expect(loading).toBeInTheDocument();
  });

  it("Displays the card element when API is resolved", async () => {
    render(<ShopPage />);

    const shopData = await screen.findByText("Shoes");

    expect(shopData).toBeInTheDocument();
  });

  it("Displays an error when API is down", async () => {
    window.fetch.mockImplementationOnce(() => {
      return Promise.reject({ message: "API is down" });
    });

    render(<ShopPage />);

    const errorMessage = await screen.findByText("API is down");
    expect(errorMessage).toBeInTheDocument();
  });
});

describe("Shop Item", () => {
  it("Displays card elements with increment, decrement buttons and value in input", async () => {
    render(<ShopPage />);
    const incrementBtns = await screen.findAllByRole("button", {
      name: /increment/i,
    });
    const decrementBtns = await screen.findAllByRole("button", {
      name: /decrement/i,
    });

    const inputNumbers = await screen.findAllByRole("spinbutton");
    const images = await screen.findAllByRole("img");
    const addToCartBtns = await screen.findAllByRole("button", {
      name: /add to cart/i,
    });

    expect(incrementBtns).toHaveLength(2);
    expect(inputNumbers).toHaveLength(2);
    expect(decrementBtns).toHaveLength(2);
    expect(images).toHaveLength(2);
    expect(addToCartBtns).toHaveLength(2);
    expect(inputNumbers[0]).toHaveValue(1);
  });

  it("Input value changes if number is provided", async () => {
    const user = userEvent.setup();

    render(<ShopPage />);

    const inputNumbers = await screen.findAllByRole("spinbutton");

    await user.type(inputNumbers[0], "{backspace}23");
    await user.type(inputNumbers[1], "{backspace}hello");
    await user.type(inputNumbers[1], "{backspace}hello");

    expect(inputNumbers[0]).toHaveValue(23);
    expect(inputNumbers[1]).toHaveValue(0);
  });

  it("Input value changes on increment/decrement button click", async () => {
    const user = userEvent.setup();

    render(<ShopPage />);

    const inputNumbers = await screen.findAllByRole("spinbutton");
    const incrementBtns = await screen.findAllByRole("button", {
      name: /increment/i,
    });

    await user.click(incrementBtns[0]);
    await user.type(inputNumbers[1], "{backspace}23");
    await user.click(incrementBtns[1]);

    expect(inputNumbers[0]).toHaveValue(2);
    expect(inputNumbers[1]).toHaveValue(24);
  });
});
