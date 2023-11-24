import { Box, Center, useColorModeValue } from "@chakra-ui/react";

export default function MyFooter() {
  const current_year = new Date().getFullYear();
  return (
    <Center
      marginTop={24}
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Box w={[300, 400, 650, 920, 1220, null]} py={4} textAlign={"center"}>
        {`© GreenVantage Partners ${current_year}. All rights reserved`}
      </Box>
    </Center>
  );
}
