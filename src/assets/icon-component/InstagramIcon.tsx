import { Image } from "@chakra-ui/react";
import InstagramLogo from "../../assets/icons/InstagramIcon.png";

const ProfilePic = () => {
  return <Image src={InstagramLogo} borderRadius={"full"} boxSize={"100%"}></Image>;
};

export default ProfilePic;
