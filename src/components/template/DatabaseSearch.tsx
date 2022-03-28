import { Box, Input, Select, Text } from "@chakra-ui/react";
import router from "next/router";
import React, { CSSProperties, FormEvent, useState, VFC } from "react";
import { HashLoader } from "react-spinners";

import { KeyRange } from "../../lib/rangeInfo";
import DatabaseSearchCard from "../../part/DatabaseSearchCard";
import { musicDataState } from "../../states/musicData";

const DatabaseSearch: VFC = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [maxKey, setMaxKey] = useState<string>("");
  const { musicData, musicFilter, loading } = musicDataState("massann");

  const changeTitle = (e: FormEvent<HTMLInputElement>) => {
    musicFilter(e.currentTarget.value, maxKey);
    setKeyword(e.currentTarget.value);
  };
  const changeMaxKey = (e: FormEvent<HTMLSelectElement>) => {
    musicFilter(keyword, e.currentTarget.value);
    setMaxKey(e.currentTarget.value);
  };
  const buttonStyle: CSSProperties = {
    width: "100%",
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
        return (
          <button
            key={content.music_id}
            onClick={() => {
              router.push("/database/" + content.music_id);
            }}
            style={buttonStyle}
          >
            <DatabaseSearchCard music={content} />
          </button>
        );
      })}
    </Box>
  );
};

export default DatabaseSearch;
