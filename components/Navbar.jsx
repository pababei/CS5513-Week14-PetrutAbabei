"use client";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Container } from "@chakra-ui/react";

import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Heading,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  textDecoration,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")}>
        <Container w={[300, 400, 650, 920, 1220, null]} maxW={1220} px={0}>
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <Link href="/" _hover={{ textDecoration: "none" }}>
              <Box>
                <Heading as="h1" size="xl" noOfLines={1}>
                  GreenVantage
                </Heading>
              </Box>
            </Link>

            <Flex alignItems={"center"}>
              <Stack direction={"row"} spacing={3}>
                <Menu>
                  <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    icon={<HamburgerIcon />}
                    variant="outline"
                  />
                  <MenuList>
                    <MenuItem as="a" href="/services-list">
                      Services
                    </MenuItem>
                    <MenuItem as="a" href="/resources-list">
                      Resources
                    </MenuItem>
                    <MenuItem as="a" href="/contacts-list">
                      Our team
                    </MenuItem>
                  </MenuList>
                </Menu>
                <Button onClick={toggleColorMode}>
                  {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>
              </Stack>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
