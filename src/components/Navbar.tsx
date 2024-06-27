import { Flex, Image, Text, Box } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex justifyContent="space-between">
      <Box>
        <Image src="/path/to/your/image.png" alt="Logo" boxSize="40px" />
      </Box>
      <Flex>
        <Text marginRight="4rem">About</Text>
        <Text marginRight="4rem">Services</Text>
        <Text marginRight="4rem">Contact Us</Text>
      </Flex>
    </Flex>
  );
};

export default Navbar;
