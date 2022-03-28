import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useEffect } from "react";

import { DamHistoryData } from "../../src/api/historyApi";
import DatabaseAddComponent from "../../src/components/template/DatabaseAdd";
import DatabaseSearchComponent from "../../src/components/template/DatabaseSearch";
import Template from "../../src/components/template/Template";
const History: NextPage = () => {
  const { getFn, response } = DamHistoryData();

  useEffect(() => {
    getFn("Ai");
  }, []);

  return (
    <Template title="履歴" backUrl="/">
      <Box></Box>
    </Template>
  );
};

export default History;
