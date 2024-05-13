import {
  Box,
  Button,
  HStack,
  Switch,
  Text,
  Stack,
} from "@chakra-ui/react";

import SortIcon from "../../assets/icon-component/SortIcon";
import VerifiedIcon from "../../assets/icon-component/VerifiedIcon";
import AddCreatorIcon from "../../assets/icon-component/AddCreatorIcon";
import DropDownIconWhite from "../../assets/icon-component/DropDownIconWhite";

const SecondoryFilterSection = () => {
  return (
    <Box mr={"24px"} borderBottomWidth={"1px"} borderBottomColor={'black'}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        px={"28px"}
        py={"20px"}
      >
        <Box>
          <HStack justifyContent={"space-between"} gap={"32px"}>
            <Button
              variant={"outline"}
              rightIcon={<SortIcon />}
              px={"16px"}
              py={"14px"}
              fontWeight={"semibold"}
              fontStyle={"Montserrat"}
              fontSize={"14px"}
              textColor={"black"}
            >
              <Text>Best Relevance</Text>
            </Button>

            <HStack direction={"row"} gap={"16px"}>
              <Stack direction={"row"} gap={"8px"}>
                <VerifiedIcon />
                <Text
                  fontStyle={"Montserrat"}
                  fontSize={"16px"}
                  textColor={"#666666"}
                >
                  App Creators
                </Text>
              </Stack>
              <Switch size={"sm"} />
            </HStack>

            <Box></Box>
          </HStack>
        </Box>

        <Box>
          <Button
            rightIcon={<DropDownIconWhite/>}
            leftIcon={<AddCreatorIcon/>}
            size={'lg'}
            bgColor={"black"}
            fontWeight={"semibold"}
            fontStyle={"Montserrat"}
            fontSize={"14px"}
            textColor={"white"}
          >Add Creators</Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default SecondoryFilterSection;
