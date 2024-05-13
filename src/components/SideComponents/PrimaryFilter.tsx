import {
  Box,
  Button,
  Center,
  Divider,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  
} from "@chakra-ui/react";
import DropDownArrowBlack from "../../assets/icon-component/DropDownArrowBlack";
import { SearchIcon } from "@chakra-ui/icons";
import img from '../../assets/icons/filterBack.png'

const PrimaryFilter = () => {
  return (
    <Box
      className="PrimaryFilterSection"
      bgImage={img}
      bgSize={"100%"}
      bgRepeat={"0"}
    >
      <Stack
        className="FilterBoxTop"
        px={"120px"}
        py={"60px"}
        bgColor={"null"}
        width={"100%"}
        gap={"10px"}
      >
        <Box
          flex="1"
          bg={"white"}
          px={"20px"}
          py={"16px"}
          borderRadius={"16px"}
        >
          <HStack
            direction={"row"}
            gap={"10px"}
            justifyContent={"space-between"}
          >
            <Stack>
              <Text fontSize={"16px"} textColor={"gray"}>
                Audience Location
              </Text>
              <Text
                fontWeight={"semibold"}
                fontStyle={"Montserrat"}
                fontSize={"16px"}
                textColor={"black"}
              >
                All
              </Text>
            </Stack>

            <Center height="50px">
              <Divider orientation="vertical" />
            </Center>

            <Stack>
              <Text fontSize={"16px"} textColor={"gray"}>
                Influencer size
              </Text>
              <Text
                fontWeight={"semibold"}
                fontStyle={"Montserrat"}
                fontSize={"16px"}
                textColor={"black"}
              >
                Choose Size
              </Text>
            </Stack>

            <Center height="50px">
              <Divider orientation="vertical" />
            </Center>

            <Stack>
              <Text fontSize={"16px"} textColor={"gray"}>
                Audience Age
              </Text>
              <Text
                fontWeight={"semibold"}
                fontStyle={"Montserrat"}
                fontSize={"16px"}
                textColor={"black"}
              >
                Any
              </Text>
            </Stack>

            <Center height="50px">
              <Divider orientation="vertical"/>
              
            </Center>

            <Stack>
              <Text fontSize={"16px"} textColor={"gray"}>
                Audience Gender
              </Text>
              <Text
                fontWeight={"semibold"}
                fontStyle={"Montserrat"}
                fontSize={"16px"}
                textColor={"black"}
              >
                Any
              </Text>
            </Stack>


            <Button
              size="lg"
              fontWeight={"semibold"}
              fontStyle={"Montserrat"}
              fontSize={"16px"}
              textColor={"white"}
              bgColor={"black"}
            >
              Show 4M results
            </Button>
          </HStack>
        </Box>

        <Box flex="2">
          <Box overflow={"hidden"}>
            <HStack
              direction="row"
              justifyContent={"space-between"}
              gap={"10px"}
            >
              <Button
                size={"lg"}
                p={"auto"}
                leftIcon={<DropDownArrowBlack />}
                bgColor={"white"}
                borderRadius={"12px"}
              >
                <Text fontSize={"16px"}>Any category</Text>
              </Button>

              <Box bgColor={"white"} width={"70%"} borderRadius={"12px"}>
                <HStack>
                  {" "}
                  <Button
                    rightIcon={<DropDownArrowBlack />}
                    bgColor={"white"}
                    size={"lg"}
                  >
                    <Text fontSize={"16px"}>Anywhere</Text>
                  </Button>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none" boxSize={"50px"}>
                      <SearchIcon></SearchIcon>
                    </InputLeftElement>
                    <Input
                      type="text"
                      placeholder="Type Name, Categories, Topics, bio keywords..."
                      size={"lg"}
                      variant={"filled"}
                      bgColor={"white"}
                    />
                  </InputGroup>
                </HStack>
              </Box>

              <Button
                size={"lg"}
                px={"20px"}
                py={"16px"}
                leftIcon={<DropDownArrowBlack />}
                bgColor={"white"}
                borderRadius={"12px"}
              >
                <Text fontSize={"16px"}>More Filters</Text>
              </Button>
            </HStack>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default PrimaryFilter;
