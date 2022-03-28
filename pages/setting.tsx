import { Button, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Link from "next/link";

import Template from "../src/components/template/Template";

const Home: NextPage = () => {
  return (
    <Template title="設定" backUrl="/">
      test
    </Template>
  );
};

export default Home;
