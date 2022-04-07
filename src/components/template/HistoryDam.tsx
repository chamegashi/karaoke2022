import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React, { VFC } from "react";

import HistoryDamTemplate from "./HistoryDamTemplate";

const HistoryDam: VFC = () => {
  return (
    <Box>
      <Tabs isFitted size="md" align="center" variant="enclosed">
        <TabList mb="1em">
          <Tab>Ai</Tab>
          <Tab>DxG</Tab>
          <Tab>Dx</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <HistoryDamTemplate damType="Ai" />
          </TabPanel>
          <TabPanel>
            <HistoryDamTemplate damType="DxG" />
          </TabPanel>
          <TabPanel>
            <HistoryDamTemplate damType="Dx" />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default HistoryDam;
