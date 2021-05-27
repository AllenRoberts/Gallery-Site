
import {Alert, AlertIcon, Button, Center, Flex, Heading, Input, VStack} from "@chakra-ui/react";
import {
  FormControl,
  FormLabel
} from "@chakra-ui/react"
import { useState } from 'react'
const ContactPage = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {

    //Prevents browser from reloading on submit
    e.preventDefault()
    console.log('Sending...')

    let data = {
      name,
      email,
      message
    }

    //Makes call to the listed url
    fetch('/api/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
    console.log('Response received')
    if (res.status === 200) { //If the call succeeds do this
      console.log('Response succeeded!')
      setSubmitted(true)
      setName(name)
      setEmail(email)
      setMessage(message)
    }
  })
}
  
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
    <form>
    <FormControl id="email" name="email" onChange={(e)=>{setName(e.target.value)}}>
  <FormLabel>Email address</FormLabel>
  <Input type="email"/>
</FormControl>
<FormControl id="name"name="name" onChange={(e)=>{setEmail(e.target.value)}}>
  <FormLabel>Name</FormLabel>
  <Input type="text" />
</FormControl>
<FormControl pb="10px" id="message" onChange={(e)=>{setMessage(e.target.value)}}>
  <FormLabel>Message</FormLabel>
  <Input type="text" />
</FormControl>
<Button colorScheme="black" variant="outline" id="submit" onClick={(e)=>{handleSubmit(e)}}>
  Send
</Button>
</form >
</VStack>
  </Center>
    </Flex>
    
  );
};


export default ContactPage;