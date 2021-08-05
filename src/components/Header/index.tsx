import { Flex, Image, Box } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Flex as="header" align="center" justify="center" h={["50px", "100px"]}>
      <Box>
        <Image src="/logo.png" alt="logotipo" />
      </Box>
    </Flex>
  );
};
