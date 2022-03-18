import { Box, Button, Center, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Box bg="gray.800" h="900" w={"100%"} color={"white"}>
      <Center fontSize="5xl" p={"6"} h="20%">
        カラオケサイト
      </Center>
      <VStack h="80%" spacing="10">
        <Button w="30%" h="10%" bg={"blue.500"}>
          検索
        </Button>
        <Button w="30%" h="10%" bg={"red.500"}>
          記録
        </Button>
        <Button w="30%" h="10%" bg={"green.500"}>
          履歴
        </Button>
      </VStack>
    </Box>
  );
};

export default Home;
