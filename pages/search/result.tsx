import { Box, Button, Center, HStack, Text, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { GetSearchResultData } from "../../src/api/searchApi";
import Template from "../../src/components/template/Template";
import { Content } from "../../src/types";

const Search: NextPage = () => {
  const router = useRouter();
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [joyContents, setJoyContents] = useState<Content[]>([]);
  const [damContents, setDamContents] = useState<Content[]>([]);

  const { getFn, response, error, loading } = GetSearchResultData();

  useEffect(() => {
    if (!router.query) {
      return;
    }
    const query = router.query;
    if (query.keyword && typeof query.keyword === "string") {
      setSearchKeyword(query.keyword);
      getFn(query.keyword);
    }
  }, [router.query]);

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

        <Center>
          <Link href="/search">
            <Button colorScheme={"teal"}>前の画面に戻る</Button>
          </Link>
        </Center>

        {joyContents.map((content, index) => {
          return (
            <Box key={content.songId} border={"2px"} m={2} rounded={"md"}>
              <HStack p={"4"}>
                <Text>{content.song}</Text>
                <Text>{content.artist}</Text>
              </HStack>
            </Box>
          );
        })}
      </Box>
    </Template>
  );
};

export default Search;
