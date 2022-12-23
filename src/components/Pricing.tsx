import React from 'react';
import {
  Box,
  Flex,
  Icon,
  Text,
  Button,
  Stack,
  HStack,
  StackProps,
} from '@chakra-ui/react';
import { CheckIcon } from '../assets/icons';

export const ListItem = (props: StackProps) => {
  const { children, ...rest } = props;
  return (
    <HStack as='li' spacing='20px' {...rest}>
      <Icon as={CheckIcon} h='22px' w='22px' />
      <Text>{children}</Text>
    </HStack>
  );
};

export function Pricing() {
  return (
    <Box
      maxW='994px'
      margin='auto'
      mt='-250px'
      boxShadow='lg'
      borderRadius='10px'
      overflow='hidden'
    >
      <Flex>
        <Box textAlign='center' bg='#F0EAFB' p='60px'>
          <Text fontWeight='800' fontSize='24px'>
            Premiun PRO
          </Text>
          <Text fontWeight='800' fontSize='60px' mt='16px'>
            $329
          </Text>
          <Text fontWeight='500' fontSize='18px' mt='8px '>
            billed annually
          </Text>
          <Button colorScheme='purple' size='lg' w='282px' mt='24px '>
            Get Started
          </Button>
        </Box>
        <Box fontSize='18px' p='60px' bg='white'>
          <Text>
            Access these features when you get this pricing package for your
            business.
          </Text>
          <Stack as='ul' spacing='20px' pt='24px'>
            <ListItem>International calling and messaging API</ListItem>
            <ListItem>Additional phone numbers</ListItem>
            <ListItem>Automated messages via Zipper</ListItem>
            <ListItem>24/7 support and consultation</ListItem>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
}
