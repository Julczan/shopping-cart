import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import ShopPage from "../src/components/ShopPage/ShopPage";

window.fetch = vi.fn(() => {
  const shopData = [
    {
      images: ["shoesImage"],
      title: "Shoes",
      price: 20,
      id: 1,
      description: "lorem",
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
