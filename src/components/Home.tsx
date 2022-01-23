import {
  Box,
  Button,
  Flex,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
  Stack,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Box>
      <Flex
        w={"100wh"}
        h={"100vh"}
        justifyContent={"center"}
        bg={"blue.200"}
        alignItems={"center"}
      >
        <Flex w={"500px"} h={"full"} alignItems={"center"}>
          <Box
            width={"400px"}
            height={"400px"}
            borderRadius={"50%"}
            bg={"teal.400"}
          ></Box>
        </Flex>
        <Stack
          direction="column"
          w={"500px"}
          h={"full"}
          bg={"purple.200"}
          spacing={8}
          justifyContent={"center"}
        >
          <Heading>Spring Sale!</Heading>
          <Text fontSize={"xl"}>
            Don't miss this seasons hottest styles at their lowest prices all
            year!
          </Text>
          <Button>
            <Link to="/products">Shop now</Link>
          </Button>
        </Stack>
      </Flex>
      <Stack spacing={1} direction={"row"} w={"full"} height={"600px"} p={4}>
        <CategoryBox categoryName="Shirts" />
        <CategoryBox categoryName="Shoes" />
        <CategoryBox categoryName="Dresses" />
      </Stack>
      <Stack spacing={1} direction={"row"} w={"full"} height={"600px"} pt={0}>
        <Box w={"full"} h={"full"} bg={"green"}></Box>
        <Box w={"full"} h={"full"} bg={"teal"}></Box>
      </Stack>
    </Box>
  );
}

function CategoryBox({ categoryName }: { categoryName: string }) {
  return (
    <Flex
      w={"full"}
      h={"full"}
      bg={"rebeccapurple"}
      direction="column"
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Heading mb={10}>{categoryName}</Heading>
      <Button>Shop now</Button>
    </Flex>
  );
}
