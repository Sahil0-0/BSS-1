import { Box, IconButton, Stack  } from "@chakra-ui/react";
import Logo from "../assets/icon-component/Logo";
import HomeIcon from "../assets/icon-component/HomeIcon";
import AnnouncementSideIcon from "../assets/icon-component/SideAnnouncement";
import UserAnalyticsIcon from "../assets/icon-component/UserAnalyticsIcon";
import StatsIcon from "../assets/icon-component/StatsIcon";
import ActivityIcon from "../assets/icon-component/ActivityIcon";
import RandomIcon from "../assets/icon-component/RadomIcon";

const SideNavBar = () => {
  return (
    <Box mx={"32px"} >
      <Stack direction={"column"}>
        <Box pb="64px" mt={"32px"}>
          <IconButton
            boxSize={"50px"}
            variant={"unstyled"}
            aria-label={"Logo to go to homepage"}
            icon={<Logo />}
          ></IconButton>
        </Box>

        <Stack gap={"24px"}>
          <IconButton
            boxSize={"Automatic"}
            aria-label={"HomePage"}
            icon={<HomeIcon />}
            variant={"unstyled"}  
          ></IconButton>
          <IconButton
            boxSize={"Automatic"}
            aria-label={"Announcement Tab"}
            icon={<AnnouncementSideIcon />}
            variant={"unstyled"}
          ></IconButton>
          <IconButton
            boxSize={"Automatic"}
            aria-label={"User Analytics Tab"}
            icon={<UserAnalyticsIcon />}
            variant={"unstyled"}
          ></IconButton>
          <IconButton
            boxSize={"Automatic"}
            aria-label={"Statistics Tab"}
            icon={<StatsIcon />}
            variant={"unstyled"}
          ></IconButton>
          <IconButton
            boxSize={"Automatic"}
            aria-label={"Activity Tab"}
            icon={<ActivityIcon />}
            variant={"unstyled"}
          ></IconButton>
          <IconButton
            boxSize={"Automatic"}
            aria-label={"Random tab"}
            icon={<RandomIcon />}
            variant={"unstyled"}
          ></IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export default SideNavBar;
