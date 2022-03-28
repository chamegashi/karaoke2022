import { Box } from "@chakra-ui/react";
import { useEffect, VFC } from "react";
import React from "react";

import { firebasePutMusicData } from "../api/firebaseDBApi";

const DatabaseAddComponent: VFC = () => {
  const { response } = firebasePutMusicData();

  useEffect(() => {
    if (!response) {
      return;
    }
  }, [response]);

  return <Box></Box>;
};

export default DatabaseAddComponent;
