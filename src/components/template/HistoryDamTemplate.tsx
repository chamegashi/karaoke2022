import { Box, Button, Center, HStack } from "@chakra-ui/react";
import React, { useEffect, useState, VFC } from "react";
import { HashLoader } from "react-spinners";

import { DamHistoryData } from "../../api/historyApi";
import { DamString } from "../../lib/types";
import HistoryCard from "../../part/HistoryCard";

interface Props {
  damType: DamString;
}

const HistoryDamAi: VFC<Props> = ({ damType }) => {
  const { getFn, loading, response } = DamHistoryData();
  const [pageIndex, setPageIndex] = useState<number>(1);

  useEffect(() => {
    getFn(damType, pageIndex, "ODAwMDA2ODIyMzMzODU0");
  }, [pageIndex]);

  return (
    <Box>
      {loading && (
        <Box m={"6"}>
          <HashLoader color={"#ffffff"} />
        </Box>
      )}
      {!loading &&
        response.map((data) => {
          return <HistoryCard key={data.created} historyData={data} />;
        })}

      {!loading && (
        <Center>
          <HStack mb={4} mt={6} spacing={"16"}>
            {pageIndex > 1 && (
              <Button
                colorScheme={"teal"}
                size={"lg"}
                onClick={() => setPageIndex(pageIndex - 1)}
              >
                前へ
              </Button>
            )}
            <Button
              colorScheme={"teal"}
              size={"lg"}
              onClick={() => setPageIndex(pageIndex + 1)}
            >
              次へ
            </Button>
          </HStack>
        </Center>
      )}
    </Box>
  );
};

export default HistoryDamAi;
