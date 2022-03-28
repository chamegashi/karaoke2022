import {
  Box,
  Button,
  Center,
  HStack,
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
import Link from "next/link";
import { FormEvent, useEffect, useState, VFC } from "react";
import React from "react";

import { firebasePutMusicData } from "../../api/firebaseDBApi";
import { KeyRange } from "../../lib/rangeInfo";
import { MusicDatum } from "../../lib/types";

interface Props {
  music: MusicDatum;
}

const DatabaseEdit: VFC<Props> = ({ music }) => {
  const { getFn, response } = firebasePutMusicData();
  const [title, setTitle] = useState<string>(music.name);
  const [hiraganaTitle, setHiraganaTitle] = useState<string>(
    music.hiragarana_name
  );
  const [artist, setArtist] = useState<string>(music.artist);
  const [key, setKey] = useState<number>(music.key);
  const [maxKey, setMaxKey] = useState<string>("");
  const [maxScore, setMaxScore] = useState<number>(music.max_score);

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
      created: music.created,
      modified: new Date().getTime(),
      user_id: "massann",
      music_id: music.music_id,
    });
  };

  return (
    <Box>
      <Center>
        <Link href="/database/">
          <Button colorScheme={"gray"} variant="outline" m={4} size={"lg"}>
            前の画面に戻る
          </Button>
        </Link>
      </Center>
      <Box m={2}>
        <label>
          <Text>タイトル</Text>
          <Input
            placeholder="タイトル"
            onChange={changeTitle}
            value={title}
          ></Input>
        </label>
      </Box>
      <Box m={2}>
        <label>
          <Text>ひらがなタイトル</Text>
          <Input
            placeholder="ひらがなたいとる"
            onChange={changeHiraganaTitle}
            value={hiraganaTitle}
          ></Input>
        </label>
      </Box>
      <Box m={2}>
        <label>
          <Text>アーティスト</Text>
          <Input
            placeholder="あーてぃすと"
            onChange={changeArtist}
            value={artist}
          ></Input>
        </label>
      </Box>
      <Box m={2}>
        <Text>最高音</Text>
        <Select
          placeholder="最高音"
          colorScheme={"teal"}
          onChange={changeMaxKey}
          value={maxKey}
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
      <Box my={4} mx={6}>
        <Text mb={8}>キー</Text>
        <Slider
          defaultValue={0}
          min={-6}
          max={6}
          step={1}
          aria-label="slider-ex-6"
          onChange={(val) => setKey(val)}
          value={key}
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
          <Text>最高点</Text>
          <Input
            placeholder="100"
            onChange={changeMaxScore}
            value={maxScore}
          ></Input>
        </label>
      </Box>
      <Center>
        <HStack>
          <Button colorScheme={"red"} m={4} size={"lg"} onClick={onOpen}>
            削除
          </Button>
          <Button colorScheme={"teal"} m={4} size={"lg"} onClick={putData}>
            保存
          </Button>
        </HStack>
      </Center>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              保存完了
            </AlertDialogHeader>

            <AlertDialogBody>保存完了しました！</AlertDialogBody>

            <AlertDialogFooter>
              <Button colorScheme="teal" onClick={onClose} ml={3}>
                了解！
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              削除確認
            </AlertDialogHeader>

            <AlertDialogBody>削除しますか？</AlertDialogBody>

            <AlertDialogFooter>
              <Button
                colorScheme="gray"
                variant="outline"
                onClick={onClose}
                ml={3}
              >
                やめる
              </Button>
              <Button colorScheme="red" onClick={onClose} ml={3}>
                さくじょ！
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
};

export default DatabaseEdit;
