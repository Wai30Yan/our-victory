import { Box } from "@chakra-ui/react";
import { MdPauseCircleOutline } from 'react-icons/md';

type PauseProps = {
    handleClick: () => void
}

export default function Pause(props: PauseProps): JSX.Element {
    const { handleClick } = props
    return (
        <Box margin='10px'>
            <MdPauseCircleOutline
                onClick={handleClick}
                color='teal' 
                fontSize={40} cursor='pointer' 
            />
        </Box>
    )
}