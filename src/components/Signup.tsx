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

export default function Signup() {
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
        <Heading>Sign up</Heading>
        <Stack
          direction="column"
          spacing={2}
          bg={"whiteAlpha.800"}
          p={5}
          w={["full", "460px"]}
          borderRadius={"5px"}
        >
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input id="email" type="email" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="username">Username</FormLabel>
            <Input id="username" type="text" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input id="password" type="password" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="confirmPassword">Confirm password</FormLabel>
            <Input id="confirmPassword" type="password" />
          </FormControl>
          <Button colorScheme={"green"}>Sign up</Button>
        </Stack>
        <Text fontSize={"sm"}>
          Already have an account?
          <Link to="/login">&nbsp; Log in</Link>
        </Text>
      </Stack>
    </Flex>
  );
}
