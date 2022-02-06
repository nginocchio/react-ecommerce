import { StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
  Button,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Heading,
  Image,
} from "@chakra-ui/react";
import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useStore } from "../../../store/useStore";
import {formatPrice} from "../stores/productSlice";

interface DetailProps {
  name: string;
  image: string;
  price: number;
  description: string;
}

interface ICartItem {
  name: string;
  id: string;
  price: number;
  image: string;
  currency: string;
}

export default function ProductDetail() {
  let { productId } = useParams();
  const product = useStore((state) => state.product);
  const getProduct = useStore((state) => state.getProduct);
  useEffect(() => {
    if (productId !== undefined) {
      getProduct(productId);
    }
  }, []);

  if (!product) return <p>loading...</p>;

  return (
    <Stack spacing={10} maxW={"1200px"} margin={"auto"}>
      <MainContent {...product} />
      <AdditionalInfo description={"dsfldfsklj"} />
      <Reviews />
    </Stack>
  );
}

function MainContent(product: ICartItem) {
  const addToCart = useStore((state) => state.addItem);
  return (
    <Stack
      direction={["column", "row"]}
      spacing={10}
      justifyContent={"space-evenly"}
      py={10}
    >
      <Stack direction={"column"} spacing={3}>
        <Image maxW="425px" src={product.image} />
        <Stack direction={"row"} spacing={4}>
          <Box w={"130px"} height={"75px"} bg={"gray.400"} />
          <Box w={"130px"} height={"75px"} bg={"gray.400"} />
          <Box w={"130px"} height={"75px"} bg={"gray.400"} />
        </Stack>
      </Stack>
      <Stack direction={"column"} spacing={4} maxW={"500px"}>
        <Heading>{product.name}</Heading>
        <Stack direction={"row"} spacing={1} alignItems={"baseline"}>
          <ReviewCount />
          <Text fontSize={"sm"}>Read reviews</Text>
        </Stack>
        <Text fontSize={"2xl"}>{formatPrice(product.price)}</Text>
        <Text fontSize={"md"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          ut ullamcorper purus. Donec non erat.{" "}
        </Text>
        <SizePicker />
        <ColorPicker />
        <Button colorScheme={"green"} onClick={() => addToCart(product)}>
          Add to cart
        </Button>
      </Stack>
    </Stack>
  );
}

function AdditionalInfo({ description }: { description: string }) {
  return (
    <Tabs isFitted colorScheme={"green"}>
      <TabList>
        <Tab>Description</Tab>
        <Tab>Composition & Care</Tab>
        <Tab>Shipping & Returns</Tab>
        <Tab>Free samples</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          ut ullamcorper purus. Donec non erat.
        </TabPanel>
        <TabPanel>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          ut ullamcorper purus. Donec non erat.
        </TabPanel>
        <TabPanel>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          ut ullamcorper purus. Donec non erat.
        </TabPanel>
        <TabPanel>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          ut ullamcorper purus. Donec non erat.
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

function Reviews() {
  return (
    <Box h={"40vh"}>
      <Text
        fontFamily={"heading"}
        fontSize={"3xl"}
        mb={"4"}
        textAlign={"center"}
      >
        Customer reviews
      </Text>
      <Stack
        direction={["column", "row"]}
        spacing={2}
        justifyContent={[null, "center"]}
        alignItems={["center", null]}
      >
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </Stack>
    </Box>
  );
}

function ReviewCount() {
  return (
    <Box>
      <StarIcon w={4} h={4} />
      <StarIcon w={4} h={4} />
      <StarIcon w={4} h={4} />
      <StarIcon w={4} h={4} />
      <StarIcon w={4} h={4} />
    </Box>
  );
}

function SizePicker() {
  return (
    <Select placeholder="Choose a size">
      <option value={"sm"}>Small</option>
      <option value={"md"}>Medium</option>
      <option value={"lg"}>Large</option>
    </Select>
  );
}

function ColorPicker() {
  const [value, setValue] = useState("Blue");

  return (
    <RadioGroup onChange={setValue} value={value}>
      <Stack direction="row">
        <Radio value="blue">Blue</Radio>
        <Radio value="white">White</Radio>
        <Radio value="black">Black</Radio>
      </Stack>
    </RadioGroup>
  );
}

function ReviewCard() {
  return (
    <Box
      border={"2px"}
      borderColor={"gray.300"}
      borderRadius={"5px"}
      bg={"gray.100"}
      maxW={"300px"}
      p={2}
    >
      <Stack direction={"row"} spacing={2} alignItems={"center"}>
        <Box
          borderRadius={"50%"}
          maxW={"30px"}
          maxH={"30px"}
          bg={"gray.400"}
          p={6}
        ></Box>
        <Box>
          <Text fontSize={"sm"}>3 stars</Text>
          <Text fontSize={"sm"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur
          </Text>
        </Box>
      </Stack>
    </Box>
  );
}
