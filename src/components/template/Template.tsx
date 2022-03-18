import { Box, Center } from "@chakra-ui/react";
import { ReactChild, VFC } from "react";

interface Props {
  title: string;
  children: ReactChild;
}

const Template: VFC<Props> = ({ title, children }) => {
  return (
    <Box bg="gray.800" h="900" w={"100%"} color={"white"}>
      <Center fontSize="5xl" p={"6"} h="20%">
        {title}
      </Center>
      {children}
    </Box>
  );
};

export default Template;
