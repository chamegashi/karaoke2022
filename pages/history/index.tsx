import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useEffect } from "react";

import { DamHistoryData } from "../../src/api/historyApi";
import Template from "../../src/components/template/Template";
const History: NextPage = () => {
  const { getFn } = DamHistoryData();

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
