import {
  Box,
  Card,
  IconButton,
  Stack,
  Text,
  VStack,
  Divider,
  HStack,
  Button,
} from "@chakra-ui/react";

import CheckSquare from "../../assets/icon-component/CheckSquare";
import InstaLogo from "../../assets/icon-component/InstagramIcon";
import Youtube from "../../assets/icon-component/Youtube";
const FilterResult = () => {
  return (
    <Box mr={"25px"} pt={"20px"} px={'24px'}>
      <Stack gap={"20px"}>
        <Card
          borderRadius={"12px"}
          borderWidth={"1px"}
          borderColor={"#808080"}
          overflow={"hidden"}
          boxShadow={'null'}
        >
          <Stack direction={"row"} gap={"null"}>
            <Stack p={"20px"}>
              <IconButton
                aria-label={"CheckBox"}
                icon={<CheckSquare />}
                variant={"filled"}
                w={"fit-content"}
                h={"auto"}
              ></IconButton>

              <Box px={"66px"}>
                <VStack gap={"22px"}>
                  <Box px={"8px"} borderRadius={"null"}>
                    <InstaLogo />
                  </Box>

                  <Stack gap={"12px"} align={"center"}>
                    <Text
                      fontWeight={"semibold"}
                      fontStyle={"Montserrat"}
                      fontSize={"16px"}
                      textColor={"black"}
                    >
                      Instagram
                    </Text>
                    <Text
                      fontWeight={"semibold"}
                      fontStyle={"Montserrat"}
                      fontSize={"14px"}
                      textColor={"#666666"}
                    >
                      @instagram
                    </Text>
                  </Stack>
                </VStack>
              </Box>
            </Stack>

            <Card
              borderRadius={"null"}
              boxShadow={"null"}
              width={"100%"}
              borderLeftWidth={"1px"}
              borderColor={"#808080"}
              p={"20px"}
            >
              <Stack
                h={"100%"}
                w={"auto"}
                justifyContent={"space-between"}
                gap={"auto"}
              >
                <Box width={"fit-content"}>
                  <Stack direction={"row"} gap={"46px"}>
                    <Stack>
                      <Text
                        fontStyle={"Montserrat"}
                        fontSize={"16p  x"}
                        textColor={"#666666"}
                      >
                        Total Followers
                      </Text>

                      <Text
                        fontWeight={"semibold"}
                        fontStyle={"Montserrat"}
                        fontSize={"18px"}
                        textColor={"black"}
                      >
                        645.M
                      </Text>
                    </Stack>

                    <Stack>
                      <Text
                        fontStyle={"Montserrat"}
                        fontSize={"16p  x"}
                        textColor={"#666666"}
                      >
                        Total Post
                      </Text>

                      <Text
                        fontWeight={"semibold"}
                        fontStyle={"Montserrat"}
                        fontSize={"18px"}
                        textColor={"black"}
                      >
                        12,000
                      </Text>
                    </Stack>
                  </Stack>
                </Box>

                <Stack direction={"row"} gap={"null"} justify={"space-between"}>
                  <HStack>
                    <Box>
                      <Stack gap={"16px"}>
                        <Stack direction={"row"} gap={"8px"}>
                          <Youtube />
                          <Text
                            fontWeight={"semibold"}
                            fontStyle={"Montserrat"}
                            fontSize={"14px"}
                            textColor={"#666666"}
                          >
                            @instagram
                          </Text>
                        </Stack>

                        <Stack direction={"row"} gap={"20px"}>
                          <Stack gap={"12px"}>
                            <Text
                              fontStyle={"Montserrat"}
                              fontSize={"14px"}
                              textColor={"#666666"}
                            >
                              Followers
                            </Text>

                            <Text
                              fontWeight={"semibold"}
                              fontStyle={"Montserrat"}
                              fontSize={"14px"}
                              textColor={"Black"}
                            >
                              645.M
                            </Text>
                          </Stack>

                          <Stack gap={"12px"}>
                            <Text
                              fontStyle={"Montserrat"}
                              fontSize={"14px"}
                              textColor={"#666666"}
                            >
                              Avg. Likes
                            </Text>

                            <Text
                              fontWeight={"semibold"}
                              fontStyle={"Montserrat"}
                              fontSize={"14px"}
                              textColor={"Black"}
                            >
                              320
                            </Text>
                          </Stack>

                          <Stack gap={"12px"}>
                            <Text
                              fontStyle={"Montserrat"}
                              fontSize={"14px"}
                              textColor={"#666666"}
                            >
                              ER
                            </Text>

                            <Text
                              fontWeight={"semibold"}
                              fontStyle={"Montserrat"}
                              fontSize={"14px"}
                              textColor={"Black"}
                            >
                              0.42%
                            </Text>
                          </Stack>
                        </Stack>
                      </Stack>
                    </Box>

                    <Divider orientation="vertical" mx={"25px"}></Divider>

                    <Box>
                      <Stack gap={"16px"}>
                        <Stack direction={"row"} gap={"8px"}>
                          <Youtube />
                          <Text
                            fontWeight={"semibold"}
                            fontStyle={"Montserrat"}
                            fontSize={"14px"}
                            textColor={"#666666"}
                          >
                            @instagram
                          </Text>
                        </Stack>

                        <Stack direction={"row"} gap={"20px"}>
                          <Stack gap={"12px"}>
                            <Text
                              fontStyle={"Montserrat"}
                              fontSize={"14px"}
                              textColor={"#666666"}
                            >
                              Followers
                            </Text>

                            <Text
                              fontWeight={"semibold"}
                              fontStyle={"Montserrat"}
                              fontSize={"14px"}
                              textColor={"Black"}
                            >
                              645.M
                            </Text>
                          </Stack>

                          <Stack gap={"12px"}>
                            <Text
                              fontStyle={"Montserrat"}
                              fontSize={"14px"}
                              textColor={"#666666"}
                            >
                              Avg. Likes
                            </Text>

                            <Text
                              fontWeight={"semibold"}
                              fontStyle={"Montserrat"}
                              fontSize={"14px"}
                              textColor={"Black"}
                            >
                              320
                            </Text>
                          </Stack>

                          <Stack gap={"12px"}>
                            <Text
                              fontStyle={"Montserrat"}
                              fontSize={"14px"}
                              textColor={"#666666"}
                            >
                              ER
                            </Text>

                            <Text
                              fontWeight={"semibold"}
                              fontStyle={"Montserrat"}
                              fontSize={"14px"}
                              textColor={"Black"}
                            >
                              0.42%
                            </Text>
                          </Stack>
                        </Stack>
                      </Stack>
                    </Box>
                  </HStack>

                  <Box display="flex" alignItems="end">
                    <HStack gap={"15px"}>
                      <Button
                        variant={"outline"}
                        fontWeight={"semibold"}
                        fontStyle={"Montserrat"}
                        fontSize={"14px"}
                        textColor={"#666666"}
                      >
                        ₹
                      </Button>
                      <Button
                        variant={"outline"}
                        fontWeight={"semibold"}
                        fontStyle={"Montserrat"}
                        fontSize={"14px"}
                        textColor={"#444444"}
                      >
                        View Report
                      </Button>
                      <Button
                        bgColor={"#1F1F1F"}
                        fontWeight={"semibold"}
                        fontStyle={"Montserrat"}
                        fontSize={"14px"}
                        textColor={"white"}
                      >
                        Add to Campaign
                      </Button>
                    </HStack>
                  </Box>
                </Stack>
              </Stack>
            </Card>
          </Stack>
        </Card>
      </Stack>
    </Box>
  );
};

export default FilterResult;
