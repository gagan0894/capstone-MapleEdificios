import { Flex, Box, Image, Text, Link, SimpleGrid } from '@chakra-ui/react';
import { FaBed, FaBath, FaRegPlayCircle } from 'react-icons/fa';
import { baseUrl, fetchApi } from '../../../utilities/fetchApi';
import ImageScrollbar from '../../../components/ImageScrollbar';

const PropertyDetails = ({ propertyDetails: { MlsNumber, PublicRemarks, Building, Land: { SizeTotal }, Individual, Property: { Price, LeaseRent, Type, Address, Photo, OwnershipType, ParkingType, TaxAmount }, AlternateURL } }) => (
    <Box maxWidth='1000px' margin='auto' p='4'>
        {Photo && <ImageScrollbar data={Photo} />}
        <Box w='full' p='6'>
            <Flex flexDirection={{ base: 'column', md: 'row' }} alignItems={{ base: 'flex-start', md: 'flex-end' }} justifyContent='space-between' padding='3' borderWidth='1px' borderRadius='sm' bg='gray.50'>
                <Box>
                    <Text fontWeight='semibold' fontSize='3xl'>{!Price && LeaseRent || !LeaseRent && Price}</Text>
                    {Address.PermitShowAddress && 
                        <Box>
                            <Text fontSize={{ base: 'sm', sm: 'lg' }} color='gray.700'>{Address.AddressText.split('|')[0]},</Text>
                            <Text fontSize={{ base: 'sm', sm: 'lg' }} color='gray.700'>{Address.AddressText.split('|')[1]}</Text>
                        </Box>
                    }                  
                    <Text fontSize={{ base: 'xs', sm: 'sm' }} lineHeight={{ base: '1.5', md: '2' }} color='gray.600'>MLS® Number: {MlsNumber}</Text>
                </Box>
                <Flex alignItems='center' paddingTop='1' paddingRight='1' justifyContent='space-between' w='150px' fontSize={{ base: 'md', sm: 'lg', md: 'xl' }} color='gray.600'>
                    {Building.Bedrooms ? Building.Bedrooms : '-'} <FaBed /> {Building.BathroomTotal ? Building.BathroomTotal: '-'} <FaBath />
                </Flex>
            </Flex>
            <Box padding='3' marginY='5' borderWidth='1px' borderRadius='sm' bg='gray.50'>
                <Box marginBottom='2'>
                    <Text marginBottom='2' fontSize='2xl' fontWeight='semibold'>Property Summary</Text>
                    <SimpleGrid columns={[null, 2, 4]}>
                        <Box marginBottom='2'>
                            <Text fontWeight='bold'>Property Type</Text>
                            <Text paddingRight='2'>{Type}</Text>
                        </Box>
                        {Building.Type && 
                            <Box marginBottom='2'>
                                <Text fontWeight='bold'>Building Type</Text>
                                <Text paddingRight='2'>{Building.Type}</Text>
                            </Box>
                        }                       
                        {Building.StoriesTotal && 
                            <Box marginBottom='2'>
                                <Text fontWeight='bold'>Storeys</Text>
                                <Text paddingRight='2'>{Building.StoriesTotal}</Text>
                            </Box>
                        }                       
                        {Address.CommunityName && 
                            <Box marginBottom='2'>
                                <Text fontWeight='bold'>Community Name</Text>
                                <Text paddingRight='2'>{Address.CommunityName}</Text>
                            </Box>
                        }                       
                        {OwnershipType && 
                            <Box marginBottom='2'>
                                <Text fontWeight='bold'>Title</Text>
                                <Text paddingRight='2'>{OwnershipType}</Text>
                            </Box>
                        }
                        {SizeTotal && 
                            <Box marginBottom='2'>
                                <Text fontWeight='bold'>Land Size</Text>
                                <Text paddingRight='2'>{SizeTotal}</Text>
                            </Box>
                        }                       
                        {TaxAmount &&
                            <Box marginBottom='2'>
                                <Text fontWeight='bold'>Annual Property Taxes</Text>
                                <Text paddingRight='2'>{TaxAmount}</Text>
                            </Box>
                        }                       
                        {ParkingType && 
                            <Box marginBottom='2'>
                                <Text fontWeight='bold'>Parking Type</Text>
                                <Text paddingRight='2'>{ParkingType}</Text>
                            </Box>
                        }                      
                    </SimpleGrid>
                </Box>
                <Box>
                    <Text marginBottom='2' fontSize='2xl' fontWeight='semibold'>Description</Text>
                    <Text fontSize={{ base: 'sm', sm: 'md' }} color='gray.700'>{PublicRemarks}</Text>
                </Box>                     
            </Box>
            {AlternateURL && 
                <Box padding='3' marginY='5' borderWidth='1px' borderRadius='sm' bg='gray.50'>
                    <Link href={AlternateURL.VideoLink} isExternal display='inline-flex' flexDirection='column' alignItems='center' textDecoration='none'>
                        <FaRegPlayCircle size={64} color='#285E61' />
                        <Text paddingTop='1' color='teal.800'>Multimedia</Text>
                    </Link>                   
                </Box>           
            }
            <Flex alignItems='flex-start' justifyContent='space-between' padding='3' borderWidth='1px' borderRadius='sm' bg='gray.50'>
                <Box>
                    <Text fontSize={{ base: 'sm', sm: 'lg' }}>{Individual[0].Organization?.Name}</Text>
                    <Text fontSize={{ base: 'xs', sm: 'md' }} fontWeight='bold' lineHeight='2' color='gray.700'>{Individual[0].Organization?.Designation}</Text>
                    {Individual[0].Organization.Address.PermitShowAddress && 
                        <Box>
                            <Text fontSize={{ base: 'xs', sm: 'md' }} color='gray.700'>{Individual[0].Organization.Address.AddressText.split('|')[0]}</Text>
                            <Text fontSize={{ base: 'xs', sm: 'md' }} color='gray.700'>{Individual[0].Organization.Address.AddressText.split('|')[1]}</Text>
                        </Box>                   
                    }
                    {Individual[0].Organization.Websites && <Link href={Individual[0].Organization.Websites[0].Website} isExternal fontSize={{ base: 'xs', sm: 'md' }} color='gray.700'>{Individual[0].Organization.Websites[0]?.Website}</Link>}
                </Box>
                <Flex justifyContent='flex-end'>
                    {Individual[0].Organization?.Logo 
                    ? <Image src={Individual[0].Organization?.Logo} alt={Individual[0].Organization?.Name} width={{ base: '75%', sm: '100%' }} /> 
                    : <Image src='/nologo.png' alt='No logo available' width={{ base: '25px', sm: '40px' }} />}
                </Flex>
            </Flex>
        </Box>
    </Box> 
);

export default PropertyDetails;

export async function getServerSideProps({ params: { MlsNumber, Id } }) {
    console.log(`ids: ${MlsNumber}, ${Id}`)
    
    const data = await fetchApi(`${baseUrl}/properties/detail?ReferenceNumber=${MlsNumber}&PropertyID=${Id}`);

    return {
        props: {
            propertyDetails: data
        }
    };
};