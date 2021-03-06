import { Box, Center } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";

import { firebaseGetSearchMusicDatum } from "../../src/api/firebaseDBApi";
import DatabaseEdit from "../../src/components/template/DatabaseEdit";
import Template from "../../src/components/template/Template";
import { MusicDatum } from "../../src/lib/types";

const DatabaseEditPage: NextPage = () => {
  const router = useRouter();
  const { music_id } = router.query;
  const { getFn, response, loading } = firebaseGetSearchMusicDatum();
  const [music, setMusic] = useState<MusicDatum>();

  useEffect(() => {
    if (!music_id) {
      return;
    }
    if (typeof music_id === "string") {
      getFn(music_id);
    }
  }, [music_id]);

  useEffect(() => {
    if (!response) {
      return;
    }
    setMusic(response);
  }, [response]);

  return (
    <Template title="データ変更" backUrl="/database">
      <Box>
        {loading && (
          <Center m={"6"}>
            <HashLoader color={"#ffffff"} />
          </Center>
        )}
        {music && <DatabaseEdit music={music} />}
      </Box>
    </Template>
  );
};

export default DatabaseEditPage;
