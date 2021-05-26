import Head from "next/head";
import GalleryPage from "../components/gallery";
import Navbar from "../components/Navbar";
import { Box, Grid } from "@chakra-ui/layout";


const Home = ({ children, title = "Allen Roberts" }) => {
  return(
  <Box height="100%">
  <Head>
    <title>{title}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head>
  <Grid
    h="100%"
    w="100%"
    gridTemplateColumns="repeat(12, 1fr)"
    gridTemplateRows="repeat(12, 1fr)"
    overflowY="hidden"
    overflowX="hidden"
    bgGradient="linear(to-r, white, red.600)"
  >
    <Box gridColumn="1/13" gridRow="1/2"  overflowY="auto" zIndex="10" bgGradient="linear(to-r, red.500, red.900)" >
      <Navbar></Navbar>
    </Box>
    <Box gridColumn="1/13" gridRow="3/13">
      <GalleryPage></GalleryPage>
    </Box>
    </Grid>
    </Box>
)
  }
export default Home;
