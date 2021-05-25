import { Center, Flex, Heading} from "@chakra-ui/react";

const ContactPage = () => {
  return (
    <Flex
      w="100%"
      h="100%"
      direction="column"
      
    >
      <Center>
       <Heading fontFamily="Share Tech Mono" fontSize={["xl", "2xl", "3xl", "4xl" ]} noOfLines={2}>
        Here there will be information to contact the owner.
    </Heading>
    
  </Center>
    </Flex>
    
  );
};


export default ContactPage;