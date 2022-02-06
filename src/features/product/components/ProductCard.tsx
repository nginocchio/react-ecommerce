import { Image, Box, Badge } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

interface ProductProps {
  image: string;
  name: string;
  price: number;
  id: string;
}

export default function ProductCard({ image, name, price, id }: ProductProps) {
  let navigate = useNavigate();
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    reviewCount: 34,
    rating: 4,
  };
  return (
    <Box maxW="300px" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image
        src={image}
        alt={property.imageAlt}
        onClick={() => navigate(`/products/${id}`)}
        cursor={"pointer"}
      />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {name}
        </Box>

        <Box>
          ${price / 100.0 + " "}
          <Box as="span" color="gray.600" fontSize="sm">
            / lbs
          </Box>
        </Box>

        <Box display="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < property.rating ? "teal.500" : "gray.300"}
              />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {property.reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
