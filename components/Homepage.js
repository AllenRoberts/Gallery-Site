import { Center, Flex, Heading} from "@chakra-ui/react";
import { UnorderedList, ListItem } from "@chakra-ui/react"

const Homepage = () => {
  return (
    <Flex
      w="100%"
      h="100%"
      direction="column"
      
    >
      <Center>
       <Heading fontFamily="Share Tech Mono" fontSize={["xl", "2xl", "3xl", "4xl" ]} noOfLines={2} pt={10}>
        FILLER TEXT
    </Heading>
    
  </Center>
    </Flex>
    
  );
};


export default Homepage;