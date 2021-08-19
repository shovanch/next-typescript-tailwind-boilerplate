import { render, screen } from "@/shared/utils/test-utils/test-setup";
import Index from "../pages/index";
import { Input } from "@/shared/components";

describe("App", () => {
  it("renders a heading", () => {
    render(<Index />);

    const heading = screen.getByRole("heading", {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument();
  });
  it("renders a hello", async () => {
    render(<Input />);

    expect(await screen.findByText(/hello/i)).toBeInTheDocument();
  });
});
