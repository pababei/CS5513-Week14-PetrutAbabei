import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Center,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";

import { dataUrls, getSortedList } from "../lib/data";

// define getStaticProps()
export async function getStaticProps() {
  const urls = dataUrls();
  const resourceData = await getSortedList(urls.resourceDataUrl);

  return {
    props: { resourceData },
    revalidate: 10,
  };
}

export default function Home({ resourceData }) {
  return (
    <>
      <Box flex={1}>
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
      </Box>
    </>
  );
}
