import { Box, HStack, Heading, Text, Image, Flex } from "@chakra-ui/react";
import hero from "../assets/hero.png";

const BannerText = () => {
  return (
    <Flex alignItems={"center"}>
      <Box boxSize={"lg"}>
        <Heading as="h1" size="lg" alignItems={"center"}>
          We do amazing on ipsum
        </Heading>
        <Text alignItems={"center"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </Box>
      <Image src={hero} alt="Logo" boxSize="lg" objectFit="cover" />
    </Flex>
  );
};

export default BannerText;
