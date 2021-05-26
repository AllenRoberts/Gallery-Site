import { Button } from "@chakra-ui/react";
import { Center, Flex, Heading, Input, VStack} from "@chakra-ui/react";
import {
  FormControl,
  FormLabel
} from "@chakra-ui/react"

const ContactPage = () => {
  return (
    <Flex
      w="100%"
      h="100%"
      direction="column"
    >
      <Center>
       
<VStack spacing="24px" >
<Heading fontFamily="Share Tech Mono" fontSize={["xl", "2xl", "3xl", "4xl" ]} noOfLines={2}>
        Feel free to contact me if you feel my skills could help you.
    </Heading>
    <FormControl id="email">
  <FormLabel>Email address</FormLabel>
  <Input type="email"/>
</FormControl>
<FormControl id="subject">
  <FormLabel>Subject</FormLabel>
  <Input type="text" />
</FormControl>
<FormControl id="message">
  <FormLabel>Message</FormLabel>
  <Input type="email" />
</FormControl>
<Button colorScheme="black" variant="outline">
  Send
</Button>
</VStack>
  </Center>
    </Flex>
    
  );
};


export default ContactPage;