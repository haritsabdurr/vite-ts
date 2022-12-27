import React from 'react';
import { Box, Text, Container, Flex, Button } from '@chakra-ui/react';
import { ImageHero } from './ImageHero';

export function Header() {
  return (
    <Box as='section' pt='85px'>
      <Box color='#F7FAFC' textAlign='center'>
        {' '}
        <Container maxW='container.md' px='96px'>
          <Text fontWeight='700' fontSize='42px'>
            Ready for SaaS Websites Crafted by TailGrids
          </Text>
          <Text fontWeight='400' fontSize='16px' pt='24px'>
            Example Template for SaaS, Software, and App Landing Page. <br />{' '}
            Crafted with TailGrids Components by TailGrids Team
          </Text>
          <Flex justify='center' gap='18px' pt='24px'>
            <Button color='#212B36' fontWeight='500'>
              Get Started Now
            </Button>
            <Button variant='outline' fontWeight='500'>
              ▶ Play Intro Video
            </Button>
          </Flex>
          <Flex justify='center' mt='56px'>
            <ImageHero />
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}
