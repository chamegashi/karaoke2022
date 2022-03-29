import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import type { NextPage } from "next";

import HistoryDam from "../../src/components/template/HistoryDam";
import Template from "../../src/components/template/Template";
const History: NextPage = () => {
  return (
    <Template title="履歴" backUrl="/">
      <Box>
        <Tabs isFitted size="md" align="center">
          <TabList mb="1em">
            <Tab>Joy</Tab>
            <Tab>Dam</Tab>
          </TabList>
          <TabPanels>
            <TabPanel></TabPanel>
            <TabPanel>
              <HistoryDam />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Template>
  );
};

export default History;
