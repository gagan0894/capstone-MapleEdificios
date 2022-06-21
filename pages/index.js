import Link from 'next/link';
import Image from 'next/image';
import Property from '../components/Property';
import { Box, Flex, Text, Button } from '@chakra-ui/react';
import { baseUrl, fetchApi } from '../utilities/fetchApi';

const Banner = ({ purpose, title, linkName, buttonText }) => (
  <Flex flexWrap='wrap' flexDirection='column' justifyContent='center' alignItems='center' marginY='10' paddingTop='5'>
    <Text fontSize={{ base: 'xl', sm: '3xl' }} fontWeight='bold' textAlign='center'>{title}</Text>
    <Text paddingBottom='3' color='gray.500' fontSize='sm' fontWeight='medium' textTransform='uppercase'>{purpose}</Text>
    <Button marginTop='1' fontSize={{ base: 'md', sm: 'xl' }}>
      <Link href={linkName}>{buttonText}</Link>
    </Button>
  </Flex>
);

export default function Home({ propertiesForSale, propertiesForRent }) {
  return (
    <Box>
      <Flex justifyContent='center' position='relative' height={{ base: '300', md: '450', lg: '600' }}>
        <Image src='/banner.jpg' alt='banner' width={2000} height={1200} objectFit='cover' />
        <Box position='absolute' top='2%'>
          <Text fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }} fontWeight='semibold' color='gray.600'>Find your dream home</Text>
        </Box>
      </Flex>
      <Banner
        //purpose='Buy a Home'
        title='Our Featured Properties'
        buttonText='Explore Featured Properties for Sale'
        linkName='/search?TransactionTypeId=2'
      />
      <Flex flexWrap='wrap' justifyContent='center'>
        {propertiesForSale.map(property => <Property property={property} key={property.Id} />)}
      </Flex>
      </Box>
      // <Banner
      //   //purpose='Rent a Home'
      //   title='Find Your Ideal Rental Home'
      //   buttonText='Explore Renting'
      //   linkName='/search?TransactionTypeId=3'
      // />
      // <Flex flexWrap='wrap' justifyContent='center'>
      //   {propertiesForRent.map(property => <Property property={property} key={property.Id} />)}
      // </Flex>
    //</Box>
  );
};

export const getStaticProps = async () => {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list-residential?TransactionTypeId=2&PropertySearchTypeId=1&BuildingTypeId=1&LatitudeMax=43.6569&LatitudeMin=43.65107&LongitudeMax=-79.347015&LongitudeMin=79.4522&CultureId=1&RecordsPerPage=6`);
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list-residential?TransactionTypeId=3&PropertySearchTypeId=1&BuildingTypeId=1&LatitudeMax=43.6569&LatitudeMin=43.65107&LongitudeMax=-79.347015&LongitudeMin=79.4522&CultureId=1&RecordsPerPage=6`);

  return {
    props: {
      propertiesForSale: propertyForSale?.Results,
      propertiesForRent: propertyForRent?.Results
    }
  };
};
