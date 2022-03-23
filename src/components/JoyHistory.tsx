import { Box, Button } from "@chakra-ui/react";

import { FormEvent, useEffect, useState, VFC } from "react";
import React from "react";

import { firebasePutMusicData } from "../api/firebaseDBApi";

const DatabaseAddComponent: VFC = () => {
  const { getFn, response } = firebasePutMusicData();

  useEffect(() => {
    if (!response) {
      return;
    }
  }, [response]);

  return <Box></Box>;
};

export default DatabaseAddComponent;
