import Image from "next/image";
import Head from "next/head";

import { Input } from "@/shared/components";

export function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>TEST DEV</title>
      </Head>
      <div className="flex flex-col items-center justify-center py-2 min-h-screen">
        <Image alt="me" height="32" src="/images/stabiz-logo.png" width="150" />
        <Input />
      </div>
    </>
  );
}

Home.publicRoute = true;
