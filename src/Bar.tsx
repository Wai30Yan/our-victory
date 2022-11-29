import React, { useState } from 'react';
import { 
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Tooltip,
  useBreakpointValue, 
} from '@chakra-ui/react'

type BarProps = {
  duration: number,
  curTime: number,
  onTimeUpdate: (time: number) => void
}

export default function Bar(props: BarProps): JSX.Element {

  const { duration, curTime, onTimeUpdate } = props;
  const [showTooltip, setShowTooltip] = useState(false)

  const sliderWidth = useBreakpointValue(
    {
      base: '350',
      md: '700',
    },
    {
      fallback: 'md',
    }
  )

  function formatDuration(duration: number) {
    return Math.floor(duration / 60) + ':' + ('0' + Math.floor(duration % 60)).slice(-2); 
  }

  function dragSlider(time: number) {

    onTimeUpdate(time);
  }

  return (
      <Slider
          maxWidth={sliderWidth}
          id='slider'
          min={0}
          max={duration}
          value={curTime}
          colorScheme='teal'
          focusThumbOnChange={true}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          onChange={(v) => dragSlider(v)}
        >
          <SliderMark value={0} mt='1' ml='-2.5' fontSize='sm'>
            {formatDuration(curTime)}
          </SliderMark>

          <SliderMark value={duration} mt='1' ml='-2.5' fontSize='sm'>
            {formatDuration(duration)}
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
            label={`${Math.floor(curTime / 60) + ':' + ('0' + Math.floor(curTime % 60)).slice(-2)}s`}
            // label={`${sliderValue}s`}
          >
            <SliderThumb />
          </Tooltip>
        </Slider>
  )
}