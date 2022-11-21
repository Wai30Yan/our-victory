import React, { useState, useEffect } from 'react';
import { 
  Text,
  Box,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Flex,
  Tooltip, 
} from '@chakra-ui/react'

import useAudioPlayer from './useAudioPlayer';
import Play from './Play';
import Pause from './Pause';
import Bar from './Bar';


function App() {
  const { curTime, duration, playing, setPlaying, setClickedTime } = useAudioPlayer();


  useEffect(() => {
    
    console.log(curTime, duration, playing)
  }, [curTime])
  
  return (
    <>
      <Flex flexDirection='column' alignItems='center'  >
        <Text fontSize='2xl' pt={20} fontWeight='bold' >Our Victory</Text>
          <audio id="audio">
            <source src='./our-victory.mp3'/>
            Your browser does not support the audio tag.
          </audio>
          {playing ?
            <Pause handleClick={() => setPlaying(false)}  /> :
            <Play handleClick={() => setPlaying(true)} /> 
          }
          {/* <Slider
            maxWidth='700'
            id='slider'
            defaultValue={5}
            min={0}
            max={100}
            colorScheme='teal'
            onChange={(v) => setSliderValue(v)}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <SliderMark value={25} mt='1' ml='-2.5' fontSize='sm'>
              25%
            </SliderMark>
            <SliderMark value={50} mt='1' ml='-2.5' fontSize='sm'>
              50%
            </SliderMark>
            <SliderMark value={75} mt='1' ml='-2.5' fontSize='sm'>
              75%
            </SliderMark>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <Tooltip
              hasArrow
              bg='teal.500'
              color='white'
              placement='top'
              isOpen={showTooltip}
              label={`${sliderValue}%`}
            >
              <SliderThumb />
            </Tooltip>
          </Slider> */}
          <Bar />
        <Box maxWidth={700} pt={15} pb={2}>
        </Box>
      </Flex>
    </>
  );
}

export default App;
