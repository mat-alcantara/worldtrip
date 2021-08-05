import Head from "next/head";

import { Text, Flex, Heading, Image } from "@chakra-ui/react";

import { Header } from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Worldtrip</title>
      </Head>

      <main>
        <Header />
        <Flex
          h="335px"
          bg="url(/background.png)"
          bgSize="cover"
          align="center"
          justify="space-between"
        >
          <Flex
            align="center"
            justify="space-between"
            w="100%"
            maxW="1120px"
            m="0 auto"
          >
            <Flex maxW="26rem" direction="column">
              <Heading color="gray.50">
                5 Continentes, <br />
                infinitas possibilidades.
              </Heading>
              <Text mt="1.5rem" color="gray.50">
                Chegou a hora de tirar do papel a viagem que você sempre sonhou.{" "}
              </Text>
            </Flex>
            <Flex mt="150px">
              <Image src="/airplane.svg" alt="Airplane image" />
            </Flex>
          </Flex>
        </Flex>
      </main>
    </div>
  );
}
