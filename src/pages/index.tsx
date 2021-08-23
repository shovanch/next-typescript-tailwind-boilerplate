import Image from "next/image";
import Head from "next/head";

import { Input } from "@/shared/components";

export default function Home() {
  return (
    <>
      <Head>
        <title>StaBiz</title>
      </Head>
      <div className="flex flex-col items-center justify-center py-2 min-h-screen">
        <Image src="/images/stabiz-logo.png" alt="me" height="32" width="150" />
        <Input />
      </div>
    </>
  );
}
