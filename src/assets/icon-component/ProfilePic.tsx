import { Image } from "@chakra-ui/react";
import Profile from "../../assets/icons/ProfilePic.jpg";

const ProfilePic = () => {
  return (
    <Image src={Profile} borderRadius={"full"} boxSize={"40px"}></Image>
  );
};

export default ProfilePic;
