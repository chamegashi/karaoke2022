import { Box, Center } from "@chakra-ui/react";
import { ReactChild, VFC } from "react";
import { getWindowSize } from "../../getWindowSize";

interface Props {
  title: string;
  children: ReactChild;
}

const Template: VFC<Props> = ({ title, children }) => {
  const { windowSize } = getWindowSize();
  return (
    <Box
      bg="gray.800"
      minHeight={windowSize.height}
      h={"full"}
      w={"100%"}
      color={"white"}
    >
      <Center fontSize="5xl" p={"6"} h="20%">
        {title}
      </Center>
      {children}
    </Box>
  );
};

export default Template;
