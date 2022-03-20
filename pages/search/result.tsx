import type { NextPage } from "next";
import Template from "../../src/components/template/Template";
import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { GetSearchResultData } from "../../src/api/searchApi";
import { Content, ContentsResponse } from "../../src/types";
import { useRouter } from "next/router";

const Search: NextPage = () => {
  const router = useRouter();
  const [contentResponce, setContentResponce] = useState<ContentsResponse>();
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [joyContents, setJoyContents] = useState<Content[]>([]);
  const [damContents, setDamContents] = useState<Content[]>([]);

  const { getFn, response, error, loading } = GetSearchResultData();

  useEffect(() => {
    getFn("test");
  }, []);

  useEffect(() => {
    if (!router.query) {
      return;
    }
    const query = router.query;
    if (query.keyword && typeof query.keyword === "string") {
      setSearchKeyword(query.keyword);
      getFn(query.keyword);
    }
  }, [getFn, router.query]);

  useEffect(() => {
    if (!response) {
      return;
    }
    setJoyContents(response.joyResponce);
    setDamContents(response.damResponce);
  }, [response]);

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  return (
    <Template title="検索結果">
      <Box>
        {loading && <Text>Loading...</Text>}
        {joyContents.map((content, index) => {
          return <Box>{content.artist}</Box>;
        })}
      </Box>
    </Template>
  );
};

export default Search;
