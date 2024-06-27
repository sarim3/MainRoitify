import { Box } from "@chakra-ui/react";
import Navbarr from "./components/Navbar";
import BannerText from "./components/BannerText";

function App() {
  return (
    <>
      <Box p={10}>
        <Navbarr />
        <BannerText />
      </Box>
    </>
  );
}

export default App;
