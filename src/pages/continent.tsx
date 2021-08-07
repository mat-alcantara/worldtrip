/* eslint-disable @next/next/no-img-element */
import { Flex, Text, Image, Stack } from "@chakra-ui/react";
import { Header } from "../components/Header";

const Continent: React.FC = () => {
  return (
    <>
      <Header />
      <Flex
        bg="url(/europa.jpeg)"
        bgSize="cover"
        h={["150px", "500px"]}
        align={["center", "flex-end"]}
        justify={["center", "left"]}
      >
        <Text
          pl={["0px", "140px"]}
          pb={["0px", "59px"]}
          fontSize={["28px", "48px"]}
          color="gray.50"
          fontWeight="700"
        >
          Europa
        </Text>
      </Flex>
      <Flex
        direction={["column", "row"]}
        justify="space-between"
        mt={["24px", "80px"]}
        w={["90%", "1140px"]}
        mx="auto"
      >
        <Text
          fontSize={["14px", "24px"]}
          maxW="600px"
          textAlign="justify"
          color="gray.600"
        >
          A Europa é, por convenção, um dos seis continentes do mundo.
          Compreendendo a península ocidental da Eurásia, a Europa geralmente
          divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
          rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>
        <Flex justify="space-between" align="center" mt={["16px", "0px"]}>
          <Flex direction="column" align="center">
            <Text fontSize={["24px", "48px"]} color="yellow.500">
              50
            </Text>
            <Text fontSize={["18px", "24px"]} fontWeight="600" color="gray.600">
              Países
            </Text>
          </Flex>
          <Flex direction="column" align="center" ml="42px">
            <Text fontSize={["24px", "48px"]} color="yellow.500">
              60
            </Text>
            <Text fontSize={["18px", "24px"]} fontWeight="600" color="gray.600">
              Línguas
            </Text>
          </Flex>
          <Flex direction="column" align="center" ml="42px">
            <Text fontSize={["24px", "48px"]} color="yellow.500">
              27
            </Text>
            <Text fontSize={["18px", "24px"]} fontWeight="600" color="gray.600">
              Cidades +100
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Text
        fontSize="36px"
        fontWeight="bold"
        color="gray.700"
        mt={["24px", "80px"]}
        w={["90%", "1140px"]}
        mx="auto"
      >
        Cidades 100+
      </Text>
      <Flex
        direction={["column", "row"]}
        mt={["24px", "48px"]}
        w={["90%", "1140px"]}
        mx="auto"
      >
        <Stack spacing={8} direction={["column", "row"]} mx={["auto", "0"]}>
          <Flex
            direction="column"
            w="236px"
            h="279px"
            border="1px solid yellow"
          >
            <Image h="173px" w="100%" src="/oceania.jpeg" alt="Imagem" />
            <Text
              px="16px"
              fontSize="20px"
              fontWeight="bold"
              mt="16px"
              color="gray.600"
            >
              Londres
            </Text>
            <Text px="16px" fontSize="16px" color="gray.400">
              Reino Unido
            </Text>
          </Flex>
          <Flex
            direction="column"
            w="236px"
            h="279px"
            border="1px solid yellow"
          >
            <Image h="173px" w="100%" src="/oceania.jpeg" alt="Imagem" />
            <Text
              px="16px"
              fontSize="20px"
              fontWeight="bold"
              mt="16px"
              color="gray.600"
            >
              Londres
            </Text>
            <Text px="16px" fontSize="16px" color="gray.400">
              Reino Unido
            </Text>
          </Flex>
          <Flex
            direction="column"
            w="236px"
            h="279px"
            border="1px solid yellow"
          >
            <Image h="173px" w="100%" src="/oceania.jpeg" alt="Imagem" />
            <Text
              px="16px"
              fontSize="20px"
              fontWeight="bold"
              mt="16px"
              color="gray.600"
            >
              Londres
            </Text>
            <Text px="16px" fontSize="16px" color="gray.400">
              Reino Unido
            </Text>
          </Flex>
        </Stack>
      </Flex>
    </>
  );
};

export default Continent;
