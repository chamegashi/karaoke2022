import { Box } from "@chakra-ui/react";
import React, { useEffect, VFC } from "react";
import { HashLoader } from "react-spinners";

import { DamHistoryData } from "../../api/historyApi";
import HistoryCard from "../../part/HistoryCard";

const HistoryDam: VFC = () => {
  const { getFn, loading, response } = DamHistoryData();

  useEffect(() => {
    getFn("Ai", 1, "ODAwMDA2ODIyMzMzODU0");
  }, []);
  return (
    <Box>
      {loading && (
        <Box m={"6"}>
          <HashLoader color={"#ffffff"} />
        </Box>
      )}
      {response.map((data) => {
        return <HistoryCard key={data.created} historyData={data} />;
      })}
    </Box>
  );
};

export default HistoryDam;
