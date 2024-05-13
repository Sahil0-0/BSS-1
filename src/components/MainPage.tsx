import { Box, Stack, Text} from "@chakra-ui/react";
import PrimaryFilter from "./SideComponents/PrimaryFilter";
import SecondaryFilterSection from "./SideComponents/SecondaryFilterSection";
import FilterResult from "./SideComponents/FilterResult";


const MainPage = () => {
  return (
    <>
      <Box 
        h={'1500px'}
        className="MainPageBox"
        my="28px"
        borderWidth={"1px"}
        borderColor={"black"}
        borderRadius={"20px"}
        overflow={"hidden"} 
        bgColor={'white'}
      >
        <PrimaryFilter />
        <SecondaryFilterSection />

        <Stack gap={"null"}>
          <Box w={"fit-content"} mr={"25px"} px={"24px"} pt={"24px"}>
            <Text>Showing 234 Result</Text>
          </Box>
          <FilterResult />
          <FilterResult />
          <FilterResult />
          <FilterResult />
          <FilterResult />
        </Stack>
      </Box>
    </>
  );
};

export default MainPage;
