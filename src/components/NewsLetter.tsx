import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function NewsLetter() {
  return (
    <Flex
      p={4}
      h={"200px"}
      bg={"gray.100"}
      alignItems={'center'}
      direction={"column"}
    >
      <Heading fontSize={"xx-large"} mb={4}>
        Never miss a thing!
      </Heading>
      <Flex w={['full', '800px']} m={"auto"}>
        <Input size={"lg"} placeholder="email" mr={2} bg={"whiteAlpha.800"} />
        <Spacer />
        <Button size={"lg"} colorScheme={"blue"}>Sign up</Button>
      </Flex>
    </Flex>
  );
}
