import { Box, BoxProps } from "@chakra-ui/react";

import siteBG from "../src/assets/icons/design.jpg";

import { ReactNode } from "react";

interface BackgroundProps extends BoxProps {
  children: ReactNode;
}

const SiteBackground = ({ children, ...rest }: BackgroundProps) => {
  return (
    <Box bgImage={siteBG} bgSize="100%" h="100vh" {...rest}>
      {children}
    </Box>
  );
};

export default SiteBackground;
