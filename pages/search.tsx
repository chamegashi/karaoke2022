import { Box, Button, Center, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";

const Search: NextPage = () => {
  return (
    <Box bg="gray.800" h="900" w={"100%"} color={"white"}>
      <Center fontSize="5xl" p={"6"} h="20%">
        検索
      </Center>
    </Box>
  );
};

export default Search;
