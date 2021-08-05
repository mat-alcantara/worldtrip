import Head from "next/head";

import { Header } from "../components/Header";
import React from "react";
import { Banner } from "../components/Banner";
import { Flex, Image, useBreakpointValue } from "@chakra-ui/react";

export default function Home() {
  const imageSrc = useBreakpointValue({
    sm: "/travel_types_web.png",
    base: "/travel_types_mobile.png",
  });

  return (
    <div>
      <Head>
        <title>Worldtrip</title>
      </Head>

      <main>
        <Header />
        <Banner />
        <Flex align="center" justify="center" mt={["36px", "100px"]}>
          <Image src={imageSrc} alt="travel types" />
        </Flex>
      </main>
    </div>
  );
}
