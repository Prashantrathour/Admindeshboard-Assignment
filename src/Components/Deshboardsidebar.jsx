'use client'
import React from 'react'

import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Accordion,
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react'
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
  FiToggleLeft,
  FiChevronsRight,
  FiDivideCircle,
} from 'react-icons/fi'
import {LuUserSquare2} from "react-icons/lu"
import {MdBuildCircle, MdLiveHelp} from "react-icons/md"
import {AiFillCodeSandboxCircle} from "react-icons/ai"
import {RiSettingsLine} from "react-icons/ri"

import { IconType } from 'react-icons'
import { ChevronRightIcon, Search2Icon } from '@chakra-ui/icons'
import Sate from './Sate'
import MidSection from './MidSection'
import ProductSell from './ProductSell'



const LinkItems = [
  { name: 'Dashboard', icon: MdBuildCircle },
  { name: 'Products', icon: AiFillCodeSandboxCircle },
  { name: 'Customers', icon: LuUserSquare2 },
  { name: 'Income', icon: LuUserSquare2 },
  { name: 'Promoted', icon: FiDivideCircle },
  { name: 'Help', icon: MdLiveHelp },
]

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
    color={"white"}
    
      transition="3s ease"
      bg={useColorModeValue('#040440', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Box display={"flex"} gap={"4"} justifyContent={"center"} alignItems={"center"}>
        <Icon fontSize={"32"} as={RiSettingsLine}/>
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Deshboard 
        </Text></Box>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <Accordion>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Accordion>
    </Box>
  )
}

const NavItem = ({ icon, children, ...rest }) => {
  return (
    
    <Box
    as="a"
    href="#"
    
    style={{ textDecoration: 'none' }}
    _focus={{ boxShadow: 'none' }}>
        <Menu>
      <Flex
   
        align="center"
        p="4"
        mx="4"
        my="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
            bg: '#2D2D69',
            color: 'white',
        }}
        {...rest}>
        {icon && (
            <Icon
            mr="4"
            fontSize="24"
            _groupHover={{
                color: 'white',
            }}
            as={icon}
          />
        )}
          
        {children}
           
        <Box marginLeft="auto" display="flex" alignItems="center" >
        <Icon as={ChevronRightIcon} fontSize="24"
            _groupHover={{
              color: 'white',
            }}/>  
        </Box>
      </Flex>
      </Menu>
    </Box>
  )
}

const MobileNav = ({ onOpen, ...rest }) => {
    const Username="Shahrukh"
  return (
    <Box>
       
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={'space-between' }
      {...rest}>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

     
<Text px={2} float={"left"}
        display={["none","flex","flex","flex"]}
        fontSize="sm"
        fontWeight={"semibold"}
       
       overflowY={"revert-layer"}
       >
        {`Hello ${Username} 👋🏻 ,`}
      </Text>
      {/* <HStack spacing={{ base: '0', md: '6' }} border={"1px solid red"}>
        <IconButton size="lg" variant="ghost" aria-label="open menu" icon={<FiBell />} />
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm">Justina Clark</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack> */}
      <HStack spacing={{ base: '0', md: '6' }} >
      <InputGroup>
    <InputLeftElement pointerEvents='none'>
      <Search2Icon color='gray.300' />
    </InputLeftElement>
        <Input type='search' placeholder='Search'/>
    
  </InputGroup>
        </HStack>
    </Flex>
    </Box>
  )
}

function Deshboardsidebar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
       <Sate/>
       <Box mt={"20px"}>
       <MidSection/>
        
       </Box>
       <Box mt={"20px"}>
      <ProductSell/>

       </Box>
      </Box>
    </Box>
    
  )
}

export default Deshboardsidebar

