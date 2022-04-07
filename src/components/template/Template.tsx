import { ArrowBackIcon, SettingsIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import router from "next/router";
import { ReactChild, VFC } from "react";

import { getWindowSize } from "../../states/getWindowSize";

interface Props {
  title: string;
  children: ReactChild;
  backUrl?: string;
  settingUrl?: string;
}

const Template: VFC<Props> = ({ title, children, backUrl }) => {
  const { windowSize } = getWindowSize();
  return (
    <Box
      bg="gray.800"
      minHeight={windowSize.height}
      h={"full"}
      w={"100%"}
      color={"white"}
      position={"relative"}
    >
      <Box h={"12"} bg={"gray.700"}>
        <Center>
          <Text fontSize={"3xl"}>カラオケサイト</Text>
        </Center>
      </Box>
      <Center fontSize="2xl" p={"6"} h="20%">
        {title}
      </Center>
      <Box pb={16}> {children}</Box>
      <Flex
        h={"16"}
        bg={"gray.700"}
        position={"fixed"}
        bottom={"0"}
        left={"0"}
        w={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {backUrl && (
          <Button
            w={"50%"}
            h={"70%"}
            bg={"gray.800"}
            border={"1px"}
            mx={1}
            onClick={() => {
              router.push(backUrl);
            }}
          >
            <ArrowBackIcon h={"12"} w={8} />
          </Button>
        )}
        <Button
          w={"50%"}
          h={"70%"}
          bg={"gray.800"}
          border={"1px"}
          onClick={() => {
            router.push("/setting");
          }}
        >
          <SettingsIcon h={"12"} w={8} />
        </Button>
      </Flex>
    </Box>
  );
};

export default Template;
