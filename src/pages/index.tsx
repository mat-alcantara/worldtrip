import Head from "next/head";

import { Text } from "@chakra-ui/react";

import { Header } from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Worldtrip</title>
      </Head>

      <main>
        <Header />
        <Text>Worldtrip</Text>
      </main>
    </div>
  );
}
