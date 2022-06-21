import { useContext } from 'react';
import Image from 'next/image';
import { Flex, Box, Icon } from '@chakra-ui/react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <Flex justifyContent='center' alignItems='center' marginRight='1'>
            <Icon onClick={() => scrollPrev()} as={FaArrowAltCircleLeft} fontSize='2xl' cursor='pointer' />
        </Flex>
    );
};
const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <Flex justifyContent='center' alignItems='center' marginLeft='1'>
            <Icon onClick={() => scrollNext()} as={FaArrowAltCircleRight} fontSize='2xl' cursor='pointer' />
        </Flex>
    );
};

const ImageScrollbar = ({ data }) => (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{ overflow: 'hidden' }}>
        {data.map(item => (
            <Box key={item.SequenceId} itemId={item.SequenceId} width={{ base: '300px', sm: '400px', md: '700px', lg: '910px' }} p='1' overflow='hidden'>
                <Image 
                    src={item.HighResPath} 
                    blurDataURL={item.HighResPath} 
                    placeholder='blur' 
                    alt='Property' 
                    width={1000} 
                    height={500}
                />
            </Box>
        ))}
    </ScrollMenu> 
);

export default ImageScrollbar;