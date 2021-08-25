import "@fontsource/noto-sans-jp";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import NextNprogress from "nextjs-progressbar";

import "@/shared/styles/globals.css";
import { TWResponsiveIndicator } from "@/shared/libs";
import { AppProviders } from "@/shared/contexts/app-providers";
import { AuthProvider, AuthGuard } from "@/shared/contexts/auth.context";

// Pages are by default, checked for protected
// Ones with publicRoute true are public pages
export type NextApplicationPage = NextPage & {
  publicRoute?: boolean;
};

export default function MyApp(props: AppProps): JSX.Element {
  const {
    Component,
    pageProps,
  }: { Component: NextApplicationPage; pageProps: unknown } = props;

  return (
    <>
      <NextNprogress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow
        options={{ showSpinner: false }}
      />
      <AppProviders>
        <AuthProvider>
          <TWResponsiveIndicator />
          {Component.publicRoute ? (
            // public page
            <Component {...pageProps} />
          ) : (
            // Do auth check for the protected routes
            <AuthGuard>
              <Component {...pageProps} />
            </AuthGuard>
          )}
        </AuthProvider>
      </AppProviders>
    </>
  );
}
