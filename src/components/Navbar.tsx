import {
  Box,
  Button,
  Flex,
  IconButton,
  useBreakpointValue,
  useColorModeValue,
  Text,
  Stack,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";

interface NavItem {
  name: string;
  link: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: "products", link: "products" },
];

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box>
      <Flex
        as={"nav"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        minH={"60px"}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        color={useColorModeValue("gray.600", "white")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            aria-label={"Toggle Navigation"}
            variant={"ghost"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Link to="/">
            <Text
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"heading"}
              color={useColorModeValue("gray.800", "white")}
            >
              Logo
            </Text>
          </Link>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Flex flex={{ base: 1, md: 0 }} justify={"flex-end"} direction={"row"}>
          <Link to="/cart">
            <IconButton
              aria-label="cart"
              icon={<MdShoppingCart style={{ fontSize: '1.5em'}} />}
              variant={"ghost"}
              mr={2}
            />
          </Link>
          <Button as={"a"} fontSize={"md"} fontWeight={400} variant={"link"}>
            <Link to="/login">Log in</Link>
          </Button>
        </Flex>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

function DesktopNav() {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Link key={navItem.name} to={`/${navItem.link}`}>
          {navItem.name}
        </Link>
      ))}
    </Stack>
  );
}

function MobileNav() {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.name} {...navItem} />
      ))}
    </Stack>
  );
}

function MobileNavItem({ name, link }: NavItem) {
  return (
    <Stack spacing={4}>
      <Link to={`/${link}`}>{name}</Link>
    </Stack>
  );
}
