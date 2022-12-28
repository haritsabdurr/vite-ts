import React from 'react';
import { Container, Box, Text, Flex, Stack, HStack } from '@chakra-ui/react';
import { RatingIcon } from '../assets/icons';
import { Users1, Users2, Users3 } from '../assets/user';

export function Testimonial() {
  return (
    <Container maxWidth='container.lg' py='70px'>
      <Box px='176px' textAlign='center'>
        <Text fontSize='20px' fontWeight='600' color='#3056D3'>
          Testimonials
        </Text>
        <Text fontSize='36px' fontWeight='700'>
          What Our Users Says
        </Text>
        <Text fontSize='16px' fontWeight='400' mt='12px'>
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form.
        </Text>
      </Box>
      <Flex gap='52px' mt='36px'>
        <Box textAlign='left' bg='white' p='36px' shadow='xl' rounded='sm'>
          <RatingIcon />
          <Text fontWeight='400' fontSize='16px' my='12px'>
            “Our members are so impressed. It's intuitive. It's clean. It's
            distraction free. If you're building a community.
          </Text>
          <HStack pt='12px'>
            <Users1 />
            <Box pl='12px'>
              <Text fontWeight='600' fontSize='14px' color='#32435C'>
                Sabo Masties
              </Text>
              <Text fontWeight='400' fontSize='12px' color='#969696'>
                Founder @ Rolex
              </Text>
            </Box>
          </HStack>
        </Box>
        <Box textAlign='left' bg='white' p='36px' shadow='xl' rounded='sm'>
          <RatingIcon />
          <Text fontWeight='400' fontSize='16px' my='12px'>
            “Our members are so impressed. It's intuitive. It's clean. It's
            distraction free. If you're building a community.
          </Text>
          <HStack pt='12px'>
            <Users2 />
            <Box pl='12px'>
              <Text fontWeight='600' fontSize='14px' color='#32435C'>
                Musharof Chowdhury
              </Text>
              <Text fontWeight='400' fontSize='12px' color='#969696'>
                Founder @ Ayro UI
              </Text>
            </Box>
          </HStack>
        </Box>
        <Box textAlign='left' bg='white' p='36px' shadow='xl' rounded='sm'>
          <RatingIcon />
          <Text fontWeight='400' fontSize='16px' my='12px'>
            “Our members are so impressed. It's intuitive. It's clean. It's
            distraction free. If you're building a community.
          </Text>
          <HStack pt='12px'>
            <Users3 />
            <Box pl='12px'>
              <Text fontWeight='600' fontSize='14px' color='#32435C'>
                William Smith
              </Text>
              <Text fontWeight='400' fontSize='12px' color='#969696'>
                Founder @ Torex
              </Text>
            </Box>
          </HStack>
        </Box>
      </Flex>
    </Container>
  );
}
