import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import router from "next/router";
import React, { useState, VFC } from "react";

import { HistoryData } from "../lib/types";

interface Props {
  historyData: HistoryData;
}

const HistoryCard: VFC<Props> = ({ historyData }) => {
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
          <HStack py={3} px={2}>
            <VStack w={"50%"}>
              <Text
                textAlign={"left"}
                textOverflow={"ellipsis"}
                overflow={"hidden"}
                whiteSpace={"nowrap"}
                fontSize={"xs"}
              >
                {historyData.title}
              </Text>
              <Text
                textAlign="left"
                textOverflow={"ellipsis"}
                overflow={"hidden"}
                whiteSpace={"nowrap"}
                fontSize={"xs"}
                color={"gray.400"}
              >
                {historyData.artist}
              </Text>
            </VStack>
            <VStack w={"50%"}>
              <Text
                textAlign={"left"}
                textOverflow={"ellipsis"}
                overflow={"hidden"}
                whiteSpace={"nowrap"}
                fontSize={"xs"}
                color={"gray.400"}
              >
                {historyData.created}
              </Text>
              <Text
                textAlign="left"
                textOverflow={"ellipsis"}
                overflow={"hidden"}
                whiteSpace={"nowrap"}
                fontSize={"xs"}
              >
                {historyData.score + " 点"}
              </Text>
            </VStack>
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
          <HStack py={3} px={2} borderBottom={"1px"}>
            <VStack w={"50%"}>
              <Text
                textAlign={"left"}
                textOverflow={"ellipsis"}
                overflow={"hidden"}
                whiteSpace={"nowrap"}
                fontSize={"xs"}
              >
                {historyData.title}
              </Text>
              <Text
                textAlign="left"
                textOverflow={"ellipsis"}
                overflow={"hidden"}
                whiteSpace={"nowrap"}
                fontSize={"xs"}
                color={"gray.400"}
              >
                {historyData.artist}
              </Text>
            </VStack>
            <VStack w={"50%"}>
              <Text
                textAlign={"left"}
                textOverflow={"ellipsis"}
                overflow={"hidden"}
                whiteSpace={"nowrap"}
                fontSize={"xs"}
                color={"gray.400"}
              >
                {historyData.created}
              </Text>
              <Text
                textAlign="left"
                textOverflow={"ellipsis"}
                overflow={"hidden"}
                whiteSpace={"nowrap"}
                fontSize={"xs"}
              >
                {historyData.score + " 点"}
              </Text>
            </VStack>
          </HStack>
          <HStack py={"1"} px={2}>
            <Button
              w={"50%"}
              border={"1px"}
              bg={"gray.800"}
              onClick={() =>
                router.push(
                  "/history/addData?title=" +
                    historyData.title +
                    "&key=" +
                    historyData.key +
                    "&score=" +
                    historyData.score +
                    "&artist=" +
                    historyData.artist
                )
              }
            >
              <Text color="white" fontWeight={"medium"} fontSize={"xs"}>
                キーを登録する
              </Text>
            </Button>
            <Box w={"50%"}>
              <Text color="white" fontWeight={"medium"} fontSize={"xs"}>
                {"Key : " + historyData.key}
              </Text>
            </Box>
          </HStack>
        </Box>
      )}
    </Box>
  );
};

export default HistoryCard;
