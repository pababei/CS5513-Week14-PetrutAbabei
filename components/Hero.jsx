import {
  Box,
  Button,
  Flex,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";

export default function Hero() {
  return (
    <Box bgGradient={"linear(to-r, blackAlpha.600, transparent)"}>
      <Flex
        w={"full"}
        minH={"80vh"}
        py={6}
        backgroundImage={
          "url(https://images.unsplash.com/photo-1488330890490-c291ecf62571?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
        }
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      >
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
        >
          <Stack
            w={[300, 400, 650, 920, null, null]}
            align={"flex-start"}
            spacing={6}
          >
            <Text
              color={"white"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "5xl", md: "6xl" })}
            >
              Let's cultivate a greener tomorrow
            </Text>
            <Text color={"gray.100"} fontSize={"2xl"} fontWeight={"300"}>
              At GreenVantage Solutions, we are your partners in building a
              sustainable future. We offer a comprehensive suite of consulting
              services designed to empower organizations to thrive in an
              environmentally conscious and socially responsible landscape. From
              strategic financial investments to impactful CSR programs and
              optimized supply chains, we guide businesses toward holistic
              sustainability. Our team of experts is committed to delivering
              tailored solutions that not only meet industry standards but set
              new benchmarks for ethical and eco-friendly practices.
            </Text>
            <Stack direction={"row"}>
              <Button colorScheme="teal" size={"md"}>
                Get in touch
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    </Box>
  );
}
