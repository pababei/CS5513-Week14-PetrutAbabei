import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
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
import Hero from "../components/Hero";

import { dataUrls, getSortedList } from "../lib/data";

export async function getStaticProps() {
  const urls = dataUrls();
  const contactData = await getSortedList(urls.contactDataUrl);
  const serviceData = await getSortedList(urls.serviceDataUrl);
  const resourceData = await getSortedList(urls.resourceDataUrl);

  return {
    props: { contactData, serviceData, resourceData },
    revalidate: 10,
  };
}

export default function Home({ contactData, serviceData, resourceData }) {
  return (
    <>
      <Box flex={1}>
        <Hero />
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

        <section>
          <Center marginTop={16} marginBottom={4}>
            <Heading as="h1" size="3xl" noOfLines={1}>
              Resources
            </Heading>
          </Center>
          <Center>
            <Accordion allowToggle w={[300, 400, 650, 920, 1220, null]}>
              {resourceData.map(
                ({ post_id, post_title, post_content, acf_fields }) => (
                  <AccordionItem key={post_id}>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          <Heading as="h2" size="md">
                            {post_title}
                          </Heading>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Text color={"gray.500"}>
                        {post_content.substring(
                          0,
                          post_content.indexOf(".") + 1
                        )}
                      </Text>
                      <Link href={`/resources/${post_id}`}>
                        <Button colorScheme="teal" size="md">
                          Learn more
                        </Button>
                      </Link>
                    </AccordionPanel>
                  </AccordionItem>
                )
              )}
            </Accordion>
          </Center>
        </section>

        <section>
          <Center marginTop={16}>
            <Heading as="h1" size="3xl" noOfLines={1}>
              Our team
            </Heading>
          </Center>
          <Box
            display={"flex"}
            justifyContent={"center"}
            flexWrap={"wrap"}
            alignItems={"stretch"}
            gap={"40px 10px"}
          >
            {contactData.map(({ post_id, post_title, acf_fields }) => (
              <Box
                key={post_id}
                w={[300, 400, 320, 220, 300, null]}
                h={230}
                bg={useColorModeValue("white", "gray.900")}
                boxShadow={"2xl"}
                rounded={"lg"}
                p={6}
                textAlign={"center"}
                position={"relative"}
              >
                <Avatar
                  size={"xl"}
                  src={acf_fields.image_link}
                  mb={4}
                  pos={"relative"}
                  _after={{
                    content: '""',
                    w: 4,
                    h: 4,
                    bg: "green.300",
                    border: "2px solid white",
                    rounded: "full",
                    pos: "absolute",
                    bottom: 0,
                    right: 3,
                  }}
                />
                <Heading fontSize={"2xl"} fontFamily={"body"} minH={14}>
                  {post_title}
                </Heading>
                <Text
                  textAlign={"center"}
                  color={useColorModeValue("gray.700", "gray.400")}
                  px={3}
                ></Text>
                <Link href={`/contacts/${post_id}`}>
                  <Button
                    flex={1}
                    fontSize={"sm"}
                    rounded={"full"}
                    _focus={{
                      bg: "gray.200",
                    }}
                  >
                    Read bio
                  </Button>
                </Link>
              </Box>
            ))}
          </Box>
        </section>
      </Box>
    </>
  );
}
