import React from 'react';
import {
  Box,
  Flex,
  Icon,
  Text,
  Button,
  VStack,
  HStack,
  StackProps,
  Container,
} from '@chakra-ui/react';

export function Pricing() {
  return (
    <Box bg='#F4F7FF' pt='70px' pb='70px'>
      <Container maxWidth='container.lg' centerContent>
        <Box px='176px' textAlign='center'>
          <Text fontSize='20px' fontWeight='600' color='#3056D3'>
            Pricing Table
          </Text>
          <Text fontSize='36px' fontWeight='700'>
            Reasonable Pricing Plan
          </Text>
          <Text fontSize='16px' fontWeight='400' mt='12px'>
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </Text>
        </Box>
        <Flex gap='36px' mt='36px'>
          <Box textAlign='center' bg='white' p='70px'>
            <Text fontWeight='500' fontSize='20px'>
              Starter
            </Text>

            <HStack>
              <Text fontWeight='600' fontSize='42px' mt='16px'>
                $25
              </Text>
              <Text fontWeight='400' fontSize='15px' pt='36px'>
                /month
              </Text>
            </HStack>
            <Text fontWeight='500' fontSize='18px' my='8px'>
              Features
            </Text>
            <VStack>
              <Text fontWeight='400' fontSize='16px' color='#637381'>
                Up to 1 User
              </Text>
              <Text fontWeight='400' fontSize='16px' color='#637381'>
                All UI Components
              </Text>
              <Text fontWeight='400' fontSize='16px' color='#637381'>
                Lifetime Access
              </Text>
              <Text fontWeight='400' fontSize='16px' color='#637381'>
                Free Updates
              </Text>
            </VStack>
            <Button
              bg='#3056D3'
              color='white'
              size='md'
              mt='32px'
              fontWeight='500'
              fontSize='16px'
            >
              Purchase Now
            </Button>
          </Box>
          <Box textAlign='center' bg='white' p='70px'>
            <Text fontWeight='500' fontSize='20px'>
              Basic
            </Text>

            <HStack>
              <Text fontWeight='600' fontSize='42px' mt='16px'>
                $59
              </Text>
              <Text fontWeight='400' fontSize='15px' pt='36px'>
                /month
              </Text>
            </HStack>
            <Text fontWeight='500' fontSize='18px' my='8px'>
              Features
            </Text>
            <VStack>
              <Text fontWeight='400' fontSize='16px' color='#637381'>
                Up to 5 User
              </Text>
              <Text fontWeight='400' fontSize='16px' color='#637381'>
                All UI Components
              </Text>
              <Text fontWeight='400' fontSize='16px' color='#637381'>
                Lifetime Access
              </Text>
              <Text fontWeight='400' fontSize='16px' color='#637381'>
                Free Updates
              </Text>
            </VStack>
            <Button
              bg='#3056D3'
              color='white'
              size='md'
              mt='32px'
              fontWeight='500'
              fontSize='16px'
            >
              Purchase Now
            </Button>
          </Box>
          <Box textAlign='center' bg='white' p='70px'>
            <Text fontWeight='500' fontSize='20px'>
              Premium
            </Text>

            <HStack>
              <Text fontWeight='600' fontSize='42px' mt='16px'>
                $99
              </Text>
              <Text fontWeight='400' fontSize='15px' pt='36px'>
                /month
              </Text>
            </HStack>

            <Text fontWeight='500' fontSize='18px' my='8px'>
              Features
            </Text>
            <VStack>
              <Text fontWeight='400' fontSize='16px' color='#637381'>
                Unlimited User
              </Text>
              <Text fontWeight='400' fontSize='16px' color='#637381'>
                All UI Components
              </Text>
              <Text fontWeight='400' fontSize='16px' color='#637381'>
                Lifetime Access
              </Text>
              <Text fontWeight='400' fontSize='16px' color='#637381'>
                Free Updates
              </Text>
            </VStack>
            <Button
              bg='#3056D3'
              color='white'
              size='md'
              mt='32px'
              fontWeight='500'
              fontSize='16px'
            >
              Purchase Now
            </Button>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
