import { Box, Input, Select, Text } from "@chakra-ui/react";
import React, { FormEvent, useState, VFC } from "react";
import { HashLoader } from "react-spinners";

import { KeyRange } from "../../lib/rangeInfo";
import DatabaseSearchCard from "../../part/DatabaseSearchCard";
import { musicDataState } from "../../states/musicData";

const DatabaseSearch: VFC = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [maxKey, setMaxKey] = useState<string>("");
  const { musicData, musicFilter, loading } = musicDataState("massann");

  const changeTitle = (e: FormEvent<HTMLInputElement>) => {
    musicFilter(e.currentTarget.value);
    setKeyword(e.currentTarget.value);
  };
  const changeMaxKey = (e: FormEvent<HTMLSelectElement>) => {
    setMaxKey(e.currentTarget.value);
  };

  return (
    <Box>
      <Box mx={1} my={2}>
        <label>
          <Text>キーワード</Text>
          <Input
            placeholder="歌手名 or タイトル"
            onChange={changeTitle}
          ></Input>
        </label>
      </Box>
      <Box mx={1} mt={2} mb={8}>
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
      {loading && (
        <Box my={"12"}>
          <HashLoader color={"#ffffff"} />
        </Box>
      )}

      {musicData.map((content) => {
        return <DatabaseSearchCard music={content} key={content.music_id} />;
      })}
    </Box>
  );
};

export default DatabaseSearch;
