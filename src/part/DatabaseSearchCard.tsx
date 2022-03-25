import { Box, HStack, Text } from "@chakra-ui/react";
import React, { VFC } from "react";
import { MusicDatum } from "../lib/types";

interface Props {
  music: MusicDatum;
}

const SearchCard: VFC<Props> = ({ music }) => {
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
          {music.name}
        </Text>
        <Text
          w={"30%"}
          textAlign="left"
          textOverflow={"ellipsis"}
          overflow={"hidden"}
          whiteSpace={"nowrap"}
          fontSize={"xs"}
          color={"gray.400"}
        >
          {music.artist}
        </Text>
        <Text w={"20%"} textAlign="left" fontSize={"sm"}>
          {music.key > 0 && "key : " + "+" + music.key}
          {music.key <= 0 && "key : " + music.key}
        </Text>
      </HStack>
    </Box>
  );
};

export default SearchCard;
