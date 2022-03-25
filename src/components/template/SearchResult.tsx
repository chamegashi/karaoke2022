import { Box } from "@chakra-ui/react";
import React, { VFC } from "react";
import { HashLoader } from "react-spinners";
import { Content } from "../../lib/types";
import SearchCard from "../../part/SearchCard";

interface Props {
  loading: boolean;
  contents: Content[];
}

const SearchResult: VFC<Props> = ({ loading, contents }) => {
  return (
    <Box>
      {loading && (
        <Box m={"6"}>
          <HashLoader color={"#ffffff"} />
        </Box>
      )}
      {contents.map((content) => {
        return <SearchCard content={content} key={content.songId} />;
      })}
    </Box>
  );
};

export default SearchResult;
