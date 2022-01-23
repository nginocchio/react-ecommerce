import { EmailIcon, InfoIcon, PhoneIcon } from "@chakra-ui/icons";
import { Box, SimpleGrid, Stack, Text, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FaPinterestP } from "react-icons/fa";

export default function Footer() {
  return (
    <SimpleGrid
      columns={[1, null, 3]}
      spacing={10}
      p={5}
      justifyContent={"center"}
    >
      <FooterAbout />
      <FooterLinks />
      <FooterContact />
    </SimpleGrid>
  );
}

function FooterAbout() {
  return (
    <Stack direction={"column"} spacing={4}>
      <Text fontFamily={"heading"} fontWeight={"bold"} fontSize={"4xl"}>
        Logo.
      </Text>
      <Text fontFamily={"body"} maxW={"400px"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis
        dignissim nulla. Proin nec vulputate. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nullam quis dignissim nulla. Proin nec
        vulputate.
      </Text>
      <Stack direction={"row"} spacing={2}>
        <Flex
          w={"60px"}
          height={"60px"}
          borderRadius={"50%"}
          bg={"#4267B2"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <FiFacebook style={{ color: "white", fontSize: "1.5em" }} />
        </Flex>
        <SocialIcon
          icon={<FiInstagram style={{ color: "white", fontSize: "1.5em" }} />}
          bgColor="#C13584"
        />
        <SocialIcon
          icon={<FiTwitter style={{ color: "white", fontSize: "1.5em" }} />}
          bgColor="#1DA1F2"
        />
        <SocialIcon
          icon={<FaPinterestP style={{ color: "white", fontSize: "1.5em" }} />}
          bgColor="#E60023"
        />
      </Stack>
    </Stack>
  );
}

function FooterLinks() {
  return (
    <Stack direction={"column"} spacing={4}>
      <Text fontFamily={"heading"} fontSize={"2xl"}>
        Useful Links
      </Text>
      <SimpleGrid columns={2} spacing={1}>
        <Link to={"#"}>link</Link>
        <Link to={"#"}>link</Link>
        <Link to={"#"}>link</Link>
        <Link to={"#"}>link</Link>
        <Link to={"#"}>link</Link>
        <Link to={"#"}>link</Link>
        <Link to={"#"}>link</Link>
        <Link to={"#"}>link</Link>
      </SimpleGrid>
    </Stack>
  );
}

function FooterContact() {
  return (
    <Stack direction={"column"} spacing={4}>
      <Text fontFamily={"heading"} fontSize={"2xl"}>
        Contact
      </Text>
      <Stack direction={"row"} spacing={2}>
        <InfoIcon w={8} height={8} />
        <Text>622 Dixie Path, South Tobinchester 98336</Text>
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <PhoneIcon w={8} height={8} />
        <Text>+ 1234 56 78</Text>
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <EmailIcon w={8} height={8} />
        <Text>Business@email.com</Text>
      </Stack>
    </Stack>
  );
}

function SocialIcon({ icon, bgColor }: { icon: JSX.Element; bgColor: string }) {
  return (
    <Flex
      w={"60px"}
      height={"60px"}
      borderRadius={"50%"}
      bg={bgColor}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {icon}
    </Flex>
  );
}
