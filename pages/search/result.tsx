import {
  Box,
  Button,
  Center,
  HStack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { GetSearchResultData } from "../../src/api/searchApi";
import Template from "../../src/components/template/Template";
import { Content } from "../../src/types";
import HashLoader from "react-spinners/HashLoader";

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
        <Center>
          <Link href="/search">
            <Button colorScheme={"teal"} mb={7}>
              前の画面に戻る
            </Button>
          </Link>
        </Center>

        <Tabs isFitted size="md" align="center">
          <TabList mb="1em">
            <Tab>Joy</Tab>
            <Tab>Dam</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              {loading && (
                <Box m={"6"}>
                  <HashLoader color={"#ffffff"} />
                </Box>
              )}
              {joyContents.map((content, index) => {
                return (
                  <Box
                    key={content.songId}
                    border={"1px"}
                    my={2}
                    mx={1}
                    rounded={"md"}
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
                );
              })}
            </TabPanel>
            <TabPanel>
              {loading && (
                <Box m={"6"}>
                  <HashLoader color={"#ffffff"} />
                </Box>
              )}

              {damContents.map((content, index) => {
                return (
                  <Box
                    key={content.songId}
                    border={"1px"}
                    my={2}
                    mx={1}
                    rounded={"md"}
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
                );
              })}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Template>
  );
};

export default Search;
