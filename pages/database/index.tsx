import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import type { NextPage } from "next";
import Template from "../../src/components/template/Template";
import DatabaseAddComponent from "../../src/components/DatabaseAddComponent";
import DatabaseSearchComponent from "../../src/components/DatabaseSearchComponent";

const Home: NextPage = () => {
  return (
    <Template title="データベース">
      <Tabs isFitted size="md" variant="enclosed" align="center">
        <TabList mb="1em">
          <Tab>検索</Tab>
          <Tab>追加</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <DatabaseSearchComponent />
          </TabPanel>
          <TabPanel>
            <DatabaseAddComponent />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Template>
  );
};

export default Home;
