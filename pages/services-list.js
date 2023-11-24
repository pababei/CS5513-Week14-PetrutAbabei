import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";

import { dataUrls, getSortedList } from "../lib/data";

// define getStaticProps()
export async function getStaticProps() {
  const urls = dataUrls();
  const serviceData = await getSortedList(urls.serviceDataUrl);

  return {
    props: { serviceData },
    revalidate: 10,
  };
}

export default function Home({ serviceData }) {
  return (
    <>
      <Navbar />
      <section>
        <Center marginTop={16} marginBottom={4}>
          <Heading as="h1" size="3xl" noOfLines={1}>
            Our services
          </Heading>
        </Center>
        <Box
          display={"flex"}
          justifyContent={"center"}
          flexWrap={"wrap"}
          alignItems={"stretch"}
          gap={"40px 10px"}
        >
          {serviceData.map(
            ({ post_id, post_title, post_content, acf_fields }) => (
              <Box
                key={post_id}
                w={[300, 400, 650, 300, 400, null]}
                h={[500, null, 430, 520, 500, null]}
                flex={"none"}
                bg={useColorModeValue("white", "gray.900")}
                boxShadow={"2xl"}
                rounded={"md"}
                p={6}
                overflow={"hidden"}
                position={"relative"}
              >
                <Box
                  h={"210px"}
                  bg={"gray.100"}
                  mt={-6}
                  mx={-6}
                  mb={6}
                  pos={"relative"}
                  overflow={"hidden"}
                >
                  <Image
                    src={acf_fields.image_link}
                    objectFit="cover"
                    position={"absolute"}
                    h={"auto"}
                    maxW={"130%"}
                  />
                </Box>
                <Stack>
                  <Heading
                    color={useColorModeValue("gray.700", "white")}
                    fontSize={"2xl"}
                    fontFamily={"body"}
                  >
                    {post_title}
                  </Heading>
                  <Text color={"gray.500"}>
                    {post_content.substring(0, post_content.indexOf(".") + 1)}
                  </Text>
                </Stack>
                <Box position={"absolute"} left={6} bottom={6}>
                  <Link href={`/services/${post_id}`}>
                    <Button colorScheme="teal" size="md">
                      Read more
                    </Button>
                  </Link>
                </Box>
              </Box>
            )
          )}
        </Box>
      </section>
    </>
  );
}
