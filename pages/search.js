import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Flex, Box, Text, Icon } from '@chakra-ui/react';
import { BsFilter } from 'react-icons/bs';
import noresult from '../assets/noresult.png';
import Property from '../components/Property';
import SearchFilters from '../components/SearchFilters';
import { fetchApi, baseUrl } from '../utilities/fetchApi';

const Search = ({ properties }) => {
    const [searchFilters, setSearchFilters] = useState(true);
    const router = useRouter();

    return (
        <Box minHeight='80vh'>
            <Flex
                onClick={() => setSearchFilters(previewFilters => !previewFilters)}
                justifyContent='center'
                alignItems='center'
                p='2'
                borderBottom='1px'
                borderColor='gray.200'
                bg='gray.100'
                fontSize='lg'
                fontWeight='black'
                cursor='pointer'
            >
                <Text>Search Properties By Filter</Text>
                <Icon paddingLeft='2' w='7' as={BsFilter} />
            </Flex>
            {searchFilters && <SearchFilters />}
            <Text p='4' fontSize='2xl' fontWeight='bold' textAlign='center'>
                Properties {router.query.TransactionTypeId === '2' && 'For Sale' || router.query.TransactionTypeId === '3' && 'For Rent'}
            </Text>
            <Flex flexWrap='wrap' justifyContent='center'>
                {properties.map(property => <Property property={property} key={property.Id} />)}
            </Flex>
            {properties.length === 0 && (
                <Flex flexDirection='column' justifyContent='center' alignItems='center' marginTop='5' marginBottom='5'>
                    <Image src={noresult} alt='No result' width={200} height={200} />
                    <Text marginTop='3' fontSize='2xl'>No Results Found</Text>
                </Flex>
            )}
        </Box>
    )
};

export default Search;

export const getServerSideProps = async ({ query }) => {
    const transactionTypeId = query.TransactionTypeId || '2'; //2-For sale|3-For rent
    const bedRange = query.BedRange || '0-0'; //0-0:Any|1-1:1|1-0:1+|2-2:2|2-0:2+|3-3:3|3-0:3+|4-4:4|4-0:4+|5-5:5|5-0:5+
    const bathRange = query.BathRange || '0-0'; //0-0:Any|1-1:1|1-0:1+|2-2:2|2-0:2+|3-3:3|3-0:3+|4-4:4|4-0:4+|5-5:5|5-0:5+
    const sortOrder = query.SortOrder || 'D'; //A - ascending | D - descending
    const landSizeRange = query.LandSizeRange || '0-0'; //0-0:Any|1-0:1+ acres|2-0:2+ acres|5-0:5+ acres|10-0:10+ acres|50-0:50+ acres|100-0:100+ acres|200-0:200+ acres|300-0:300+ acres|400-0:400+ acres|500-0:500+ acres|1000-0:1000+ acres.
    const buildingTypeId = query.BuildingTypeId || '0'; //0-No Preference|1-House|2-Duplex|3-Triplex|5-Residential Commercial Mix|6-Mobile Home|12-Special Purpose|14-Other|16-Row / Townhouse|17-Apartment|19-Fourplex|20-Garden Home|26-Modular|27-Manufactured Home/Mobile|28-Commercial Apartment|29-Manufactured Home

    const data = await fetchApi(`${baseUrl}/properties/list-residential?TransactionTypeId=${transactionTypeId}&BedRange=${bedRange}&BathRange=${bathRange}&BuildingTypeId=${buildingTypeId}&LandSizeRange=${landSizeRange}&SortOrder=${sortOrder}&LatitudeMax=43.6569&LatitudeMin=43.65107&LongitudeMax=-79.347015&LongitudeMin=79.4522&CultureId=1&RecordsPerPage=12`);
    return {
      props: {   
        properties: data?.Results
      }
    };
};