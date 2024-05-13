import { Box, Grid, GridItem } from "@chakra-ui/react";

import SideNavBar from "./components/SideNavBar";
import Header from "./components/Header";
import Main from "./components/MainPage";

const App = () => {
  return (
    <Grid templateColumns="repeat(14, 1fr)">
      <GridItem colSpan={1}>
        <Box pos={'fixed'}>
          <SideNavBar />
        </Box>
      </GridItem>
      <GridItem colSpan={13} mr={"32px"}>
        <Header />
        <Main />
      </GridItem>
    </Grid>
  );
};

export default App;
