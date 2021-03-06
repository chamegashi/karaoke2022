import {
  Box,
  Button,
  Input,
  Select,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { FormEvent, useEffect, useState, VFC } from "react";
import React from "react";
import { uuid } from "uuidv4";

import { firebasePutMusicData } from "../../api/firebaseDBApi";
import { KeyRange } from "../../lib/rangeInfo";

interface Props {
  title?: string;
  hiraganaTitle?: string;
  artist?: string;
}

const SearchAddData: VFC<Props> = (props) => {
  const { getFn, response } = firebasePutMusicData();
  const [title, setTitle] = useState<string>(props.title ? props.title : "");
  const [hiraganaTitle, setHiraganaTitle] = useState<string>(
    props.hiraganaTitle ? props.hiraganaTitle : ""
  );
  const [artist, setArtist] = useState<string>(
    props.artist ? props.artist : ""
  );
  const [key, setKey] = useState<number>(0);
  const [maxKey, setMaxKey] = useState<string>("");
  const [maxScore, setMaxScore] = useState<number>(0);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!response) {
      return;
    }
    onOpen();
  }, [response]);

  const changeTitle = (e: FormEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };
  const changeHiraganaTitle = (e: FormEvent<HTMLInputElement>) => {
    setHiraganaTitle(e.currentTarget.value);
  };
  const changeArtist = (e: FormEvent<HTMLInputElement>) => {
    setArtist(e.currentTarget.value);
  };
  const changeMaxKey = (e: FormEvent<HTMLSelectElement>) => {
    setMaxKey(e.currentTarget.value);
  };
  const changeMaxScore = (e: FormEvent<HTMLInputElement>) => {
    setMaxScore(parseInt(e.currentTarget.value));
  };

  const putData = () => {
    getFn({
      name: title,
      hiragarana_name: hiraganaTitle,
      artist: artist,
      key: key,
      max_range: maxKey,
      max_score: maxScore,
      created: new Date().getTime(),
      modified: new Date().getTime(),
      user_id: "massann",
      music_id: uuid(),
    });
  };

  return (
    <Box>
      <Box m={2}>
        <label>
          <Text>????????????</Text>
          <Input
            placeholder="????????????"
            onChange={changeTitle}
            value={title}
          ></Input>
        </label>
      </Box>
      <Box m={2}>
        <label>
          <Text>????????????????????????</Text>
          <Input
            placeholder="????????????????????????"
            onChange={changeHiraganaTitle}
            value={hiraganaTitle}
          ></Input>
        </label>
      </Box>
      <Box m={2}>
        <label>
          <Text>??????????????????</Text>
          <Input
            placeholder="??????????????????"
            onChange={changeArtist}
            value={artist}
          ></Input>
        </label>
      </Box>
      <Box m={2}>
        <Text>?????????</Text>
        <Select
          placeholder="?????????"
          colorScheme={"teal"}
          onChange={changeMaxKey}
        >
          {KeyRange.map((key) => {
            return (
              <option
                className="dropdownOption"
                value={key.key}
                color={"black"}
                key={key.id}
              >
                {key.key}
              </option>
            );
          })}
        </Select>
      </Box>
      <Box m={2}>
        <Text mb={8}>??????</Text>
        <Slider
          defaultValue={0}
          min={-6}
          max={6}
          step={1}
          aria-label="slider-ex-6"
          onChange={(val) => setKey(val)}
        >
          <SliderMark value={-6} mt="1" ml="-2.5" fontSize="sm">
            -6
          </SliderMark>
          <SliderMark value={6} mt="1" ml="-2.5" fontSize="sm">
            +6
          </SliderMark>
          <SliderMark
            value={key}
            textAlign="center"
            bg="blue.500"
            color="white"
            mt="-10"
            ml="-5"
            w="12"
          >
            {key}
          </SliderMark>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>
      <Box m={2}>
        <label>
          <Text>?????????</Text>
          <Input placeholder="100" onChange={changeMaxScore}></Input>
        </label>
      </Box>
      <Button colorScheme={"teal"} m={4} size={"lg"} onClick={putData}>
        ??????
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              ????????????
            </AlertDialogHeader>

            <AlertDialogBody>???????????????????????????</AlertDialogBody>

            <AlertDialogFooter>
              <Button colorScheme="teal" onClick={onClose} ml={3}>
                ?????????
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
};

export default SearchAddData;
