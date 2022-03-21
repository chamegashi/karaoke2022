import { Box, Center, Input } from "@chakra-ui/react";
import { useEffect, VFC } from "react";
import { firebasePutMusicData } from "../api/firebaseDBApi";

const DatabaseAddComponent: VFC = () => {
  const { getFn, response } = firebasePutMusicData();

  //   useEffect(() => {
  //     getFn();
  //   }, []);

  return (
    <Box>
      <Center>
        <Input></Input>
      </Center>
    </Box>
  );
};

export default DatabaseAddComponent;
