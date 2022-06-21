import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer, Image,Text } from '@chakra-ui/react';
import { GrMenu } from 'react-icons/gr';
import { BsSearch, BsMinecartLoaded } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';
import { CgHome } from 'react-icons/cg';

const Navbar = () => (
    <Flex paddingX='2' paddingY='5' bgColor='blue.100'>
        <Box fontSize={{ base:'2xl', sm:'3xl' }} color='gray.600' fontWeight='bold' display='flex' alignItems='center' paddingLeft='2'>
            <Link href='/' passHref><Box w={200} paddingX='1' cursor='pointer'><Image src='/logo.jpg' width={200} /></Box></Link>
            <Text align='center'>MAPLE EDIFICIOS</Text>
        </Box>
        <Spacer />
        <Box display='flex' alignItems='center'>
            <Menu>
                <MenuButton as={IconButton} icon={<GrMenu />} variant='outline' _focus={{ border: '' }} />
                <MenuList>
                    <Link href='/' passHref>
                        <MenuItem>Home</MenuItem>
                    </Link>
                    <Link href='/search?TransactionTypeId=2' passHref>
                        <MenuItem>Buy</MenuItem>
                    </Link>
                    <Link href='/search?TransactionTypeId=3' passHref>
                        <MenuItem>Rent</MenuItem>
                    </Link>
                </MenuList>
            </Menu>
        </Box>
    </Flex>
);

export default Navbar;
