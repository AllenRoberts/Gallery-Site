import { Center, Flex, Heading} from "@chakra-ui/react";

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
    </Flex>
    
  );
};


export default GalleryPage;