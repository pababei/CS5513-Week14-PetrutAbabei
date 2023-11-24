import {
  Avatar,
  Box,
  Button,
  Center,
  Container,
  Heading,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";

import { dataUrls, getSortedList } from "../lib/data";

import MyFooter from "../components/Footer";

// define getStaticProps()
export async function getStaticProps() {
  const urls = dataUrls();
  const contactData = await getSortedList(urls.contactDataUrl);

  return {
    props: { contactData },
    revalidate: 10,
  };
}

export default function ContactsList({ contactData }) {
  return (
    <>
      <Navbar />
      <section>
        <Center marginTop={16} marginBottom={4}>
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
    </>
  );
}
