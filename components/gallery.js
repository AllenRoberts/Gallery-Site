import { Button } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
import { Box, Center, Flex, Heading, HStack} from "@chakra-ui/react";

const GalleryPage = () => {
  return (
    <Flex
      w="100%"
      h="100%"
      direction="column"
      
    >
      <Center>
       <Heading fontFamily="Share Tech Mono" fontSize={["xl", "2xl", "3xl", "4xl" ]} noOfLines={2}>
        Here will be the models displayed with buttons to traverse the pictures
    </Heading>
    </Center>
    <Center>
    <HStack spacing="24px">
  <Button size="sm" variant="outline">
    <ArrowLeftIcon/>
  </Button>
  <Box w="50%" h="50%">
    <img></img>
  </Box>
  <Button  size="sm" variant="outline">
    <ArrowRightIcon/>
  </Button>
  
</HStack>
</Center>
  
    </Flex>
    
  );
};


export default GalleryPage;