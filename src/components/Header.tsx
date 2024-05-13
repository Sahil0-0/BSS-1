import {
  Box,
  Button,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import SearchIcon from "../assets/icon-component/SearchIcon";
import NotificationIcon from "../assets/icon-component/NotificationIcon";
import Announcement from "../assets/icon-component/Announcement";
import CoinIcon from "../assets/icon-component/CoinIcon";
import ProfilePic from "../assets/icon-component/ProfilePic";
import DropDownArrowBlack from "../assets/icon-component/DropDownArrowBlack";



const Header = () => {
  return (
    <HStack className="headerLine" my="32px" justifyContent="space-between">
      <Box>
        <InputGroup>
          <InputLeftElement pointerEvents="none" boxSize={"40px"}>
            <SearchIcon></SearchIcon>
          </InputLeftElement>
          <Input
            type="text"
            placeholder="Search key word.."
            borderRadius="full"
            size={"50px"}
          />
        </InputGroup>
      </Box>

      <HStack gap={"20px"}>
        <Button
          leftIcon={<CoinIcon />}
          borderRadius="full"
          variant="outline"
          borderColor={"black"}
          pl={"4px"}
          size={"sm"}
          w={"fit-content"}
        >
          25,635 Coins
        </Button>

        <IconButton
          aria-label={"Logo to go to homepage"}
          icon={<NotificationIcon />}
          boxSize={"Automatic"}
          variant={"unstyled"}
        ></IconButton>

        <Button
          leftIcon={<Announcement />}
          boxSize={"Automatic"}
          
          borderRadius={"full"}
          
          variant={"unstyled"}
        />
        <Button
          leftIcon={<ProfilePic />}
          rightIcon={<DropDownArrowBlack />}
          borderRadius="full"
          variant="outline"
          borderColor={"black"}
          pr={"16px"}
          pl={"4px"}
          size={"lg"}
          w={"fit-content"}
        >
          Sahil Singh
        </Button>
      </HStack>
    </HStack>
  );
};

export default Header;
