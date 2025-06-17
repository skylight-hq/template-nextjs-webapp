import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

export function renderWithUser(children: React.ReactElement) {
  return {
    user: userEvent.setup(),
    ...render(children),
  };
}
