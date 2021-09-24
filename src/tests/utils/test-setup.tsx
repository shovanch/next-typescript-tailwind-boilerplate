import { render, RenderOptions } from "@testing-library/react";
import { ComponentType, ReactElement } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { useRouter } from "next-router-mock";

import { Providers } from "@/shared/contexts/app-providers";

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

// export const MockMemoryRouter = ({ children }): JSX.Element => {
//   return (
//     <RouterContext.Provider value={useRouter()}>
//       {children}
//     </RouterContext.Provider>
//   );
// };

export function AllProviders({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const testQueryClient = createTestQueryClient();

  return (
    <QueryClientProvider client={testQueryClient}>
      <Providers>{children}</Providers>
    </QueryClientProvider>
  );
}

// const customRender = (
//   ui: ReactElement,
//   options?: Omit<RenderOptions, "wrapper">
// ) => render(ui, { wrapper: AllTheProviders, ...options });

// https://github.com/testing-library/react-testing-library/issues/634#issuecomment-613168127
// const customRender = (
//   ui: JSX.Element,
//   options?: Omit<RenderOptions, "queries">
// ) => render(ui, { wrapper: AllTheProviders, ...options });

function wrappedRender(
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) {
  return render(ui, {
    wrapper: AllProviders as ComponentType,
    ...options,
  });
}

// export function renderWithClient(ui: React.ReactElement) {
//   const testQueryClient = createTestQueryClient();

//   return
//   const { rerender, ...result } = render(ui, { }
//     <QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>
//   );

//   return {
//     ...result,
//     rerender: (rerenderUi: React.ReactElement) =>
//       rerender(
//         <QueryClientProvider client={testQueryClient}>
//           {rerenderUi}
//         </QueryClientProvider>
//       ),
//   };
// }

// re-export everything
export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";

// override render method
export { wrappedRender as render };
