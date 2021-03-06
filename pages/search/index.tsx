import { Box, Button, Center, Input } from "@chakra-ui/react";
import type { NextPage } from "next";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";

import Template from "../../src/components/template/Template";
import { musicDataState } from "../../src/states/localStrage";

const Search: NextPage = () => {
  const [searchWord, setSearchWord] = useState<string>("");
  const { addSearchLog, getSearchLogs, strageData } = musicDataState();

  const changeKeyword = (e: FormEvent<HTMLInputElement>) => {
    setSearchWord(e.currentTarget.value);
  };

  useEffect(() => {
    console.log(addSearchLog("testData"));
    console.log(strageData);
  }, []);

  return (
    <Template title="検索" backUrl="/">
      <Box>
        <Box mx={6}>
          <Center m={1} fontSize={"2xl"}>
            キーワード
          </Center>
          <Input
            placeholder="歌手名 or タイトル"
            size={"lg"}
            value={searchWord}
            onChange={changeKeyword}
          />
        </Box>
        <Center m={6}>
          <Link
            href={{
              pathname: "/search/result",
              query: {
                keyword: searchWord,
              },
            }}
          >
            <Button colorScheme={"teal"}>検索！</Button>
          </Link>
        </Center>
        <Center>{strageData}</Center>
      </Box>
    </Template>
  );
};

export default Search;
