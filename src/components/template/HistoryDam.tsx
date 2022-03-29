import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React, { VFC } from "react";

import HistoryDamAi from "./HistoryDamAi";
import HistoryDamDx from "./HistoryDamDx";
import HistoryDamDxG from "./HistoryDamDxG";

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
            <HistoryDamAi />
          </TabPanel>
          <TabPanel>
            <HistoryDamDxG />
          </TabPanel>
          <TabPanel>
            <HistoryDamDx />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default HistoryDam;
