import { Box, Button, HStack, Text } from "@chakra-ui/react";
import React, { useState, VFC } from "react";

import { Content } from "../lib/types";

interface Props {
  content: Content;
}

const SearchCard: VFC<Props> = ({ content }) => {
  const [clicked, setClicked] = useState<boolean>(false);
  return (
    <Box>
      {!clicked && (
        <Box
          border={"1px"}
          my={2}
          mx={1}
          rounded={"md"}
          onClick={() => {
            setClicked(true);
          }}
        >
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
      )}
      {clicked && (
        <Box
          border={"1px"}
          my={2}
          mx={1}
          rounded={"md"}
          onClick={() => {
            setClicked(false);
          }}
        >
          <HStack py={"5"} px={4} borderBottom={"1px"}>
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
          <HStack py={"1"} px={2}>
            <Button w={"50%"} border={"1px"} bg={"gray.800"}>
              <Text color="white" fontWeight={"medium"} fontSize={"xs"}>
                キーを登録する
              </Text>
            </Button>
            <Button w={"50%"} border={"1px"} bg={"gray.800"}>
              <Text color="white" fontWeight={"medium"} fontSize={"xs"}>
                お気に入りに登録(まだ)
              </Text>
            </Button>
          </HStack>
        </Box>
      )}
    </Box>
  );
};

export default SearchCard;
