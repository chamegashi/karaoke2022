import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import type { NextPage } from "next";

import DatabaseAdd from "../../src/components/template/DatabaseAdd";
import DatabaseSearch from "../../src/components/template/DatabaseSearch";
import Template from "../../src/components/template/Template";

const Home: NextPage = () => {
  return (
    <Template title="データベース" backUrl="/">
      <Tabs isFitted size="md" variant="enclosed" align="center">
        <TabList mb="1em">
          <Tab>検索</Tab>
          <Tab>追加</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <DatabaseSearch />
          </TabPanel>
          <TabPanel>
            <DatabaseAdd />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Template>
  );
};

export default Home;
