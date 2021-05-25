import { Box, ChakraProvider, CSSReset } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    
    <ChakraProvider>
      <CSSReset />
      <style global jsx>{`
    html,
    body,
    body > div:first-child,
    div#__next,
    div#__next > div {
      height: 100%;
    }
    #__next {
      height: 100%;
    }
    body {
      height: 100%;
    }
    
    
    
  `}</style>
      <div style={{ position: 'absolute'}}>
      </div>
      <Box h="100%" w="100%" bg="red.50">
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;