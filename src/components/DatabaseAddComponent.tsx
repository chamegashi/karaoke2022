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
} from "@chakra-ui/react";
import { useState, VFC } from "react";
import { KeyRange } from "../lib/rangeInfo";
import { firebasePutMusicData } from "../api/firebaseDBApi";

const DatabaseAddComponent: VFC = () => {
  const { getFn, response } = firebasePutMusicData();
  const [sliderValue, setSliderValue] = useState<number>(0);

  //   useEffect(() => {
  //     getFn();
  //   }, []);

  return (
    <Box>
      <Box m={2}>
        <label>
          <Text>タイトル</Text>
          <Input placeholder="タイトル"></Input>
        </label>
      </Box>
      <Box m={2}>
        <label>
          <Text>ひらがなタイトル</Text>
          <Input placeholder="ひらがなたいとる"></Input>
        </label>
      </Box>
      <Box m={2}>
        <label>
          <Text>アーティスト</Text>
          <Input placeholder="あーてぃすと"></Input>
        </label>
      </Box>
      <Box m={2}>
        <Text mb={8}>キー</Text>
        <Slider
          defaultValue={0}
          min={-6}
          max={6}
          step={1}
          aria-label="slider-ex-6"
          onChange={(val) => setSliderValue(val)}
        >
          <SliderMark value={-6} mt="1" ml="-2.5" fontSize="sm">
            -6
          </SliderMark>
          <SliderMark value={6} mt="1" ml="-2.5" fontSize="sm">
            +6
          </SliderMark>
          <SliderMark
            value={sliderValue}
            textAlign="center"
            bg="blue.500"
            color="white"
            mt="-10"
            ml="-5"
            w="12"
          >
            {sliderValue}
          </SliderMark>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>
      <Box m={2}>
        <Text>最高音</Text>
        <Select placeholder="最高音" colorScheme={"teal"}>
          {KeyRange.map((key) => {
            return (
              <option className="dropdownOption" value={key} color={"black"}>
                {key}
              </option>
            );
          })}
        </Select>
      </Box>
      <Box m={2}>
        <label>
          <Text>最高点</Text>
          <Input placeholder="100"></Input>
        </label>
      </Box>
      <Button colorScheme={"teal"} m={4} size={"lg"}>
        保存
      </Button>
    </Box>
  );
};

export default DatabaseAddComponent;
