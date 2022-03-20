import type { NextPage } from "next";
import Template from "../../src/components/template/Template";
import { Box, Button, Center, Input } from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import Link from "next/link";

const Search: NextPage = () => {
  const [searchWord, setSearchWord] = useState<string>("");

  const changeKeyword = (e: FormEvent<HTMLInputElement>) => {
    setSearchWord(e.currentTarget.value);
  };

  return (
    <Template title="検索">
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
      </Box>
    </Template>
  );
};

export default Search;
