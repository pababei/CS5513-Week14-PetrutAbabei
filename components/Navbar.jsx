"use client";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

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
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
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
      </Box>
    </>
  );
}
