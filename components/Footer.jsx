import {
  Box,
  Button,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const current_year = new Date().getFullYear();
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      marginTop={"60px"}
      flexShrink={0}
    >
      <Container
        w={[300, 400, 650, 920, 1220, null]}
        maxW={1220}
        as={Stack}
        py={4}
        px={0}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text
          my={0}
          fontSize={[12, 14, null, null, null, null]}
        >{`© ${current_year} GreenVantage Solutions. All rights reserved`}</Text>
        <Stack direction={"row"} spacing={6}>
          <Button label={"Twitter"} href={"#"}>
            <FaTwitter />
          </Button>
          <Button label={"YouTube"} href={"#"}>
            <FaYoutube />
          </Button>
          <Button label={"Instagram"} href={"#"}>
            <FaInstagram />
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
