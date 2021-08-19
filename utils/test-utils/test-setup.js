import { render } from "@testing-library/react";

// const ProviderWrappers = ({ children }) => {
//   return <AppProviders>{children}</AppProviders>;
// };

// const customRender = (ui, options) =>
//   render(ui, { wrapper: ProviderWrappers, ...options });
const customRender = (ui, options) =>
  render(ui);


// re-export everything
export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";

// override render method
export { customRender as render };
