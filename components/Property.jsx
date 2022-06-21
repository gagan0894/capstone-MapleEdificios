import Link from 'next/link';
import { Box, Flex, Text, Image } from '@chakra-ui/react';
import { FaBed, FaBath } from 'react-icons/fa';

const Property = ({ property: { Id, MlsNumber, Building: { BathroomTotal, Bedrooms }, Individual, Property: { Address, Photo, ConvertedPrice } } }) => (
    <Link href={`/property/${MlsNumber}/${Id}`} passHref>        
        <Flex flexWrap='wrap' w={{ base: '200px', sm: '325px', lg: '420px' }}>
            <Box m='2' borderWidth='1px' borderRadius='lg' overflow='hidden' cursor='pointer' _hover={{ boxShadow:'0 3.5px 7px 0 rgba(0,0,0,0.16)' }}>
                <Box paddingBottom='2'>
                    <Image src={Photo ? Photo[0].HighResPath : '/house.webp'} width={400} height={{ base: '125px', sm: '200px', lg: '260px' }} alt='House' />
                </Box>
                <Box w='full' p='2' paddingTop='0'>
                    <Flex alignItems='center' justifyContent='space-between' paddingY='1'>
                        <Flex alignItems='center'>
                            <Text fontSize={{ base: 'md', sm: 'xl' }} fontWeight='bold'>{ConvertedPrice}</Text>
                        </Flex>
                        <Flex width={{ base: '25px', sm: '40px', md: '70px', lg: '80px' }} height={{ base: '12px', sm: '19px', md: '34px' }} justifyContent='flex-end'>
                            {Individual[0].Organization?.Logo 
                            ? <Image src={Individual[0].Organization?.Logo} alt={Individual[0].Organization?.Name} /> 
                            : <Image src='/nologo.png' alt='No logo available' />}
                        </Flex>
                    </Flex>              
                    <Text fontSize={{ base: 'xs', sm: 'lg' }} whiteSpace='nowrap' overflow='hidden' textOverflow='ellipsis'>{Address.AddressText.split('|')[0]},</Text>
                    <Text fontSize={{ base: 'xs', sm: 'lg' }}>{Address.AddressText.split('|')[1]}</Text>
                    <Flex alignItems='center' p='1' justifyContent='space-between' w='150px' fontSize={{ base: 'sm', sm: 'xl' }} color='gray.500'>
                        {Bedrooms ? Bedrooms : '-'} <FaBed /> {BathroomTotal ? BathroomTotal : '-'} <FaBath /> 
                    </Flex>
                </Box>
            </Box>
        </Flex>
    </Link>
);

export default Property;