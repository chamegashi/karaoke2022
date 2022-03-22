import { Box, Button, HStack, Input, Select, Text } from "@chakra-ui/react";
import React, { FormEvent, useState, VFC } from "react";
import { KeyRange } from "../lib/rangeInfo";
import { musicDataState } from "../states/musicData";

const DatabaseSearchComponent: VFC = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [maxKey, setMaxKey] = useState<string>("");
  const { musicData, loading, musicFilter } = musicDataState("massann");

  const changeTitle = (e: FormEvent<HTMLInputElement>) => {
    musicFilter(e.currentTarget.value);
    setKeyword(e.currentTarget.value);
  };
  const changeMaxKey = (e: FormEvent<HTMLSelectElement>) => {
    setMaxKey(e.currentTarget.value);
  };

  return (
    <Box>
      <Box m={2}>
        <label>
          <Text>キーワード</Text>
          <Input
            placeholder="歌手名 or タイトル"
            onChange={changeTitle}
          ></Input>
        </label>
      </Box>
      <Box m={2} mb={8}>
        <Text>最高音</Text>
        <Select
          placeholder="最高音"
          colorScheme={"teal"}
          onChange={changeMaxKey}
        >
          {KeyRange.map((key) => {
            return (
              <option
                className="dropdownOption"
                value={key.key}
                color={"black"}
                key={key.id}
              >
                {key.key}
              </option>
            );
          })}
        </Select>
      </Box>
      {musicData.map((music) => {
        return (
          <Box key={music.music_id} border={"2px"} m={2} rounded={"md"}>
            <HStack p={"4"}>
              <Text>{music.name}</Text>
              <Text>{music.artist}</Text>
            </HStack>
          </Box>
        );
      })}
    </Box>
  );
};

export default DatabaseSearchComponent;
