import { Box, HStack, Text } from "@chakra-ui/react";
import React, { VFC } from "react";
import { Content } from "../lib/types";

interface Props {
  content: Content;
}

const SearchCard: VFC<Props> = ({ content }) => {
  return (
    <Box border={"1px"} my={2} mx={1} rounded={"md"}>
      <HStack py={"5"} px={4}>
        <Text
          w={"50%"}
          textAlign={"left"}
          textOverflow={"ellipsis"}
          overflow={"hidden"}
          whiteSpace={"nowrap"}
          fontSize={"xs"}
        >
          {content.song}
        </Text>
        <Text
          w={"50%"}
          textAlign="left"
          textOverflow={"ellipsis"}
          overflow={"hidden"}
          whiteSpace={"nowrap"}
          fontSize={"xs"}
          color={"gray.400"}
        >
          {content.artist}
        </Text>
      </HStack>
    </Box>
  );
};

export default SearchCard;
