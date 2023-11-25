import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/bootstrap.min.css";
import "../styles/globals.css";
import { Box, ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Box minH={"100vh"} display={"flex"} flexDirection={"column"}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
