import { Flex, Image, Box } from "@chakra-ui/react";

import Link from "next/link";

export const Header = () => {
  return (
    <Flex as="header" align="center" justify="center" h={["50px", "100px"]}>
      <Link href="/" passHref>
        <Box as="a">
          <Image src="/logo.png" alt="logotipo" />
        </Box>
      </Link>
    </Flex>
  );
};
