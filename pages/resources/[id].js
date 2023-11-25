import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  Center,
} from "@chakra-ui/react";
import { dataUrls, getIds, getItemData } from "../../lib/data";

export async function getStaticProps({ params }) {
  const urls = dataUrls();
  const itemData = await getItemData(params.id, urls.resourceDataUrl);
  return {
    props: {
      itemData,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const urls = dataUrls();
  const paths = await getIds(urls.resourceDataUrl);
  return {
    paths,
    fallback: false,
  };
}

export default function Entry({ itemData }) {
  return (
    <>
      <Container maxW={"7xl"} flex={1}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={12}
        >
          <Flex>
            <Image
              rounded={"md"}
              alt={"product image"}
              src={itemData.acf_fields.image_link}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={{ base: "100%", sm: "400px", lg: "500px" }}
            />
          </Flex>

          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={"header"}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "xl", sm: "3xl", lg: "3xl" }}
              >
                {itemData.post_title}
              </Heading>
            </Box>
            <Box
              color={useColorModeValue("gray.500", "gray.400")}
              fontSize={"xl"}
              fontWeight={"200"}
              dangerouslySetInnerHTML={{ __html: itemData.post_content }}
            ></Box>
          </Stack>
        </SimpleGrid>
        <Stack
          spacing={{ base: 4, sm: 6 }}
          direction={"column"}
          divider={
            <StackDivider
              borderColor={useColorModeValue("gray.200", "gray.600")}
            />
          }
        >
          <Box>
            <Text
              fontSize={{ base: "16px", lg: "18px" }}
              color={useColorModeValue("yellow.500", "yellow.300")}
              fontWeight={"500"}
              textTransform={"uppercase"}
              mb={"4"}
            >
              Benefits
            </Text>
            <Text
              color={useColorModeValue("gray.500", "gray.400")}
              fontSize={"2xl"}
              fontWeight={"300"}
            >
              {itemData.acf_fields.benefits}
            </Text>
          </Box>
          <Box>
            <Text
              fontSize={{ base: "16px", lg: "18px" }}
              color={useColorModeValue("yellow.500", "yellow.300")}
              fontWeight={"500"}
              textTransform={"uppercase"}
              mb={"4"}
            >
              Pricing{" "}
            </Text>
            <Text
              color={useColorModeValue("gray.500", "gray.400")}
              fontSize={"2xl"}
              fontWeight={"300"}
            >
              {itemData.acf_fields.pricing}
            </Text>
          </Box>
          <Box>
            <Text
              fontSize={{ base: "16px", lg: "18px" }}
              color={useColorModeValue("yellow.500", "yellow.300")}
              fontWeight={"500"}
              textTransform={"uppercase"}
              mb={"4"}
            >
              Format{" "}
            </Text>
            <Text
              color={useColorModeValue("gray.500", "gray.400")}
              fontSize={"2xl"}
              fontWeight={"300"}
            >
              {itemData.acf_fields.format}
            </Text>
          </Box>
        </Stack>
        <Center my={10}>
          <Button colorScheme="teal" size={"md"}>
            Request resource
          </Button>
        </Center>
      </Container>
    </>
  );
}
