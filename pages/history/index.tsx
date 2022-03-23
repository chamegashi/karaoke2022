import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import type { NextPage } from "next";

import DatabaseAddComponent from "../../src/components/DatabaseAddComponent";
import DatabaseSearchComponent from "../../src/components/DatabaseSearchComponent";
import Template from "../../src/components/template/Template";

const History: NextPage = () => {
  return (
    <Template title="履歴">
      <Tabs isFitted size="md" variant="enclosed" align="center">
        <TabList mb="1em">
          <Tab>Joy</Tab>
          <Tab>Dam</Tab>
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

export default History;
