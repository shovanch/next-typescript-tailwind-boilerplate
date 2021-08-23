import "@fontsource/noto-sans-jp/400.css";
import "@fontsource/noto-sans-jp/500.css";
import type { AppProps } from "next/app";

import "@/shared/styles/globals.css";
import { TWResponsiveIndicator } from "@/shared/components";
import { AppProviders } from "@/shared/contexts/app-providers";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProviders>
      <TWResponsiveIndicator />
      <Component {...pageProps} />
    </AppProviders>
  );
}
