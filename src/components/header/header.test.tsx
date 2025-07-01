import { screen } from "@testing-library/dom";
import Header from "./header";
import { renderWithUser } from "@/utils/test.helpers";

describe("Header", () => {
  test("Click on logo takes user to landing page", async () => {
        const { user } = renderWithUser(<Header></Header>);
    const logo = await screen.findByRole("link", {
      name: /nextjs web application template/i,
    });
    expect(logo).toHaveAttribute("href", "/");
    await user.click(logo);
  });
});
