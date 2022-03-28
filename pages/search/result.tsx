import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { GetSearchResultData } from "../../src/api/searchApi";
import SearchResult from "../../src/components/template/SearchResult";
import Template from "../../src/components/template/Template";
import { Content } from "../../src/lib/types";

const Search: NextPage = () => {
  const router = useRouter();
  const [joyContents, setJoyContents] = useState<Content[]>([]);
  const [damContents, setDamContents] = useState<Content[]>([]);

  const { getFn, response, error, loading } = GetSearchResultData();

  useEffect(() => {
    if (!router.query) {
      return;
    }
    const query = router.query;
    if (query.keyword && typeof query.keyword === "string") {
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
    <Template title="検索結果" backUrl="/search">
      <Box>
        <Tabs isFitted size="md" align="center">
          <TabList mb="1em">
            <Tab>Joy</Tab>
            <Tab>Dam</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <SearchResult
                loading={loading}
                contents={joyContents}
              ></SearchResult>
            </TabPanel>
            <TabPanel>
              <SearchResult
                loading={loading}
                contents={damContents}
              ></SearchResult>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Template>
  );
};

export default Search;
