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
          h={["163px", "335px"]}
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
            <Flex maxW="26rem" direction="column" p={["16px", "0px"]}>
              <Heading color="gray.50" fontSize={["20px", "36px"]}>
                5 Continentes, <br />
                infinitas possibilidades.
              </Heading>
              <Text
                mt={["0.5rem", "1.5rem"]}
                color="gray.50"
                fontSize={["14px", "20px"]}
              >
                Chegou a hora de tirar do papel a viagem que você sempre sonhou.{" "}
              </Text>
            </Flex>
            <Flex display={["none", "flex"]} mt="150px">
              <Image src="/airplane.svg" alt="Airplane image" />
            </Flex>
          </Flex>
        </Flex>
      </main>
    </div>
  );
}
