import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import AddData from "../../src/components/template/AddData";
import Template from "../../src/components/template/Template";

const Search: NextPage = () => {
  const router = useRouter();
  const [artist, setArtist] = useState("");
  const [title, setTitle] = useState("");
  const [key, setKey] = useState("");
  const [score, setScore] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!router.query) {
      return;
    }
    if (typeof router.query.artist === "string") {
      setArtist(router.query.artist);
    }
    if (typeof router.query.title === "string") {
      setTitle(router.query.title);
    }
    if (typeof router.query.key === "string") {
      setKey(router.query.key);
    }
    if (typeof router.query.score === "string") {
      setScore(router.query.score);
    }
    setLoading(false);
  }, [router.query]);

  return (
    <Template title="検索結果" backUrl={"/history"}>
      <Box>
        {!loading && (
          <AddData
            artist={artist}
            keyRenge={key}
            title={title}
            score={Number(score)}
          />
        )}
      </Box>
    </Template>
  );
};

export default Search;
