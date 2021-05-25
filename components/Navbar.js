import { Button, Center, Flex, Heading, Text } from "@chakra-ui/react";
import {HStack} from "@chakra-ui/react"
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter()
  return (
    <Flex
      w="100%"
      h="100%"
      direction="column"
    >
      <Center>
      <HStack spacing="15px" pt="3">
        
  <Button
  color="white"
  variant="outline" 
  size="md"
  onClick={() => router.push('/')}
  >
    <Text fontSize={["sm", "md", "lg", "xl"]}>Home</Text>
  </Button>
  <Button
  color="white"
  variant="outline"
  size="md"
  onClick={() => router.push('/gallery')}
  >
    <Text fontSize={["sm", "md", "lg", "xl"]}>Gallery</Text>
  </Button>
  <Button
  color="white"
  variant="outline"
  size="md"
  onClick={() => router.push('/contact')}
  >
    <Text fontSize={["sm", "md", "lg", "xl"]}>Contact</Text>
  </Button>
</HStack>
    
    </Center>
    </Flex>
    
  );
};


export default Navbar;