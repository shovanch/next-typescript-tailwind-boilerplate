import "@/shared/styles/globals.css";
import { TWResponsiveIndicator } from "@/shared/components";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <TWResponsiveIndicator />
      <Component {...pageProps} />
    </>
  );
}
