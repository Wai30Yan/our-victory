import { Box } from "@chakra-ui/react";
import { MdOutlinePlayCircleOutline } from 'react-icons/md';

type PlayProps = {
    handleClick: () => void;
}

export default function Play(props: PlayProps): JSX.Element {
    const { handleClick } = props
    return (
        <Box margin='10px'>
            <MdOutlinePlayCircleOutline
                onClick={handleClick}
                color='teal' 
                fontSize={40} cursor='pointer' 
            />
        </Box>
    )
}