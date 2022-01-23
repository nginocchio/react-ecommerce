import {
    Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <Flex
      w={"100wh"}
      h={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
      bg={"gray.100"}
    >
      <Stack
        direction={"column"}
        spacing={2}
        justifyContent={"center"}
        alignItems={"center"}
        w="full"
      >
        <Heading>Log in</Heading>
        <Stack direction="column" spacing={2} bg={"whiteAlpha.800"} p={5} w={['full', "460px"]} borderRadius={'5px'}>
          <FormControl>
            <FormLabel htmlFor="username">Username</FormLabel>
            <Input id="username" type="text" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input id="password" type="password" />
          </FormControl>
          <Button colorScheme={'green'}>Log in</Button>
        </Stack>
        <Text fontSize={"sm"}>
          Don't have an account?
          <Link to="/signup">&nbsp; Sign up</Link>
        </Text>
      </Stack>
    </Flex>
  );
}
