import React from 'react';
import { Box, Container, Flex, Text, HStack, Button } from '@chakra-ui/react';
import { LogoSass } from '../assets/icons';

export function Navigation() {
  return (
    <Box>
      <Container maxWidth='container.lg'>
        <Flex justify='space-between' py='18px' align='center'>
          <LogoSass />
          <HStack color='white' spacing='36px'>
            <Text fontSize='16px' fontWeight='500'>
              Home
            </Text>
            <Text fontSize='16px' fontWeight='500'>
              Features
            </Text>
            <Text fontSize='16px' fontWeight='500'>
              Team
            </Text>
            <Text fontSize='16px' fontWeight='500'>
              Pricing
            </Text>
            <Text fontSize='16px' fontWeight='500'>
              Contact
            </Text>
          </HStack>
          <HStack>
            <Button
              size='md'
              variant='outline'
              color='white'
              fontSize='16px'
              fontWeight='500'
            >
              Sign In
            </Button>
            <Button
              size='md'
              colorScheme='whiteAlpha'
              fontSize='16px'
              fontWeight='500'
            >
              Sign Up
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
