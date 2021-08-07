import Head from "next/head";

import { Header } from "../components/Header";
import React from "react";
import { Banner } from "../components/Banner";
import {
  Divider,
  Flex,
  Image,
  useBreakpointValue,
  Text,
} from "@chakra-ui/react";
import { SwiperLayout } from "../components/Swiper";

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
        <Divider
          mt={["36px", "80px"]}
          h="2px"
          w="60px"
          mx="auto"
          bg="gray.900"
        />
        <Text
          align="center"
          mt={["24px", "52px"]}
          fontSize={["20px", "36px"]}
          color="gray.600"
        >
          Vamos nessa?
          <br />
          Então escolha seu continente
        </Text>
        <Flex
          w={["100%", "1240px"]}
          h={["250px", "450px"]}
          mx="auto"
          my={["20px", "52px"]}
          bgSize="cover"
        >
          <SwiperLayout />
        </Flex>
      </main>
    </div>
  );
}
