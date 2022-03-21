import { Button, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Link from "next/link";
import Template from "../src/components/template/Template";

const Home: NextPage = () => {
  return (
    <Template title="カラオケサイト">
      <VStack h={"xl"} spacing="10">
        <Link href="/search">
          <Button w="30%" h="10%" bg={"blue.500"}>
            検索
          </Button>
        </Link>
        <Link href="/database">
          <Button w="30%" h="10%" bg={"red.500"}>
            記録
          </Button>
        </Link>
        <Button w="30%" h="10%" colorScheme="teal">
          履歴
        </Button>
      </VStack>
    </Template>
  );
};

export default Home;
