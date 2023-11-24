import {
  Box,
  Container,
  Stack,
  Image,
  Flex,
  Button,
  Heading,
  SimpleGrid,
  useColorModeValue,
  Center,
} from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import { dataUrls, getIds, getItemData } from "../../lib/data";
import MyFooter from "../../components/Footer";

export async function getStaticProps({ params }) {
  const urls = dataUrls();
  const itemData = await getItemData(params.id, urls.contactDataUrl);
  return {
    props: {
      itemData,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const urls = dataUrls();
  const paths = await getIds(urls.contactDataUrl);
  return {
    paths,
    fallback: false,
  };
}

export default function Entry({ itemData }) {
  return (
    <>
      <Navbar />
      <Container maxW={"7xl"}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
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
                fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
              >
                {itemData.post_title}
              </Heading>
              <Box
                color={useColorModeValue("gray.500", "gray.400")}
                fontSize={"xl"}
                fontWeight={"200"}
                dangerouslySetInnerHTML={{ __html: itemData.post_content }}
              ></Box>
            </Box>

            <Center my={10}>
              <Button colorScheme="teal" size={"md"}>
                {itemData.acf_fields.email}
              </Button>
            </Center>
          </Stack>
        </SimpleGrid>
      </Container>
      <MyFooter />
    </>
  );
}
