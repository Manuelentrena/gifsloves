import {
  fireEvent,
  render,
  /* waitForElement, */
  screen,
} from "@testing-library/react";
import App from "../App";

test("home work as expected", async () => {
  const { findByText } = render(<App />);
  const title = await findByText(/Ultimós Gifs Buscados/i);
  expect(title).toBeInTheDocument();
});

/* test("Gif link is visible", async () => {
  const { container } = render(<App />);
  const card = await waitForElement(() =>
    container.querySelector(".card__img")
  );
  expect(card).toBeVisible(true);
}); */

/* test("search form cuold be used", async () => {
  const { findByText } = render(<App />);
  const input = await screen.findByRole("textbox");
  const button = await screen.findByRole("button");
  fireEvent.change(input, { target: { value: "Matrix" } });
  fireEvent.click(button);

  const title = await findByText(/Gifs de Matrix/i);
  expect(title).toBeInTheDocument();
}); */
