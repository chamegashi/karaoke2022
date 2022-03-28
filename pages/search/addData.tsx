import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import SearchAddData from "../../src/components/template/SearchAddData";
import Template from "../../src/components/template/Template";

const Search: NextPage = () => {
  const router = useRouter();
  const [artist, setArtist] = useState("");
  const [title, setTitle] = useState("");
  const [hiraganaTitle, setHiraganaTitle] = useState("");
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
    if (typeof router.query.hiraganaTitle === "string") {
      setHiraganaTitle(router.query.hiraganaTitle);
    }
    setLoading(false);
  }, [router.query]);

  return (
    <Template title="検索結果" backUrl={"/search"}>
      <Box>
        {!loading && (
          <SearchAddData
            artist={artist}
            hiraganaTitle={hiraganaTitle}
            title={title}
          />
        )}
      </Box>
    </Template>
  );
};

export default Search;
