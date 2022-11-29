import React, { useState, useEffect } from 'react';
import { 
  Text,
  Box,
  Flex,
  Button,
  ButtonGroup, 
} from '@chakra-ui/react'

import useAudioPlayer from './useAudioPlayer';
import Play from './Play';
import Pause from './Pause';
import Bar from './Bar';
import Lyric from './Lyric';

const Songs = [
  {
    src: "./our-victory.mp3",
    name: "Our Victory"
  },
  {
    src: "./kara.mp3",
    name: "Our Victory without Vocal"
  },
]


function App() {
  const { curTime, duration, playing, setPlaying, setClickedTime } = useAudioPlayer();

  const [src, setSrc] = useState("./our-victory.mp3");
  const [name, setName] = useState("Our Victory");

  function chooseSong(song: string, name: string) {
    setSrc(song);
    setName(name);
    setPlaying(false);
  }

  useEffect(() => {
    const audio = document.getElementById("audio") as HTMLAudioElement;
    audio.pause();
    audio.load();

  }, [src])
  
  return (
    <>
      <Flex width='100%' height='100vh' flexDirection='column' alignItems='center'  >
        <ButtonGroup mt='20' gap='4'>
          <Button onClick={() => chooseSong(Songs[0].src, Songs[0].name)} colorScheme='teal'>Our Victory</Button>
          <Button onClick={() => chooseSong(Songs[1].src, Songs[1].name)} colorScheme='teal'>Our Victory without Vocal</Button>
        </ButtonGroup>

        <Text fontSize='2xl' pt={20} fontWeight='bold' color='teal.500' >{name}</Text>
        <audio id="audio">
          <source src={src}/>
          Your browser does not support the audio tag.
        </audio>
        {playing ?
          <Pause handleClick={() => setPlaying(false)}  /> :
          <Play handleClick={() => setPlaying(true)} /> 
        }
        <Bar curTime={curTime!} duration={duration!} onTimeUpdate={(time: number) => setClickedTime(time)} />
        <Lyric />
      </Flex>
    </>
  );
}

export default App;
