import { Container, Flex, Box, Text, HStack, Stack } from '@chakra-ui/react';
import { LogoSass2 } from '../assets/icons';
import { Facebook, Instagram, Linkedin, Twitter } from '../assets/social';
import '../styles/Additional.css';

export function Footer() {
  return (
    <Box pt='50px' pb='20px' bg='#090E34'>
      <Container maxWidth='container.lg'>
        <Flex justify='start' gap='96px' pb='12px'>
          <Box w='212px'>
            <LogoSass2 />
            <Text fontSize='15px' fontWeight='500' color='#8890A4' pt='18px'>
              We create digital experiences for brands and companies by using
              technology.
            </Text>
            <HStack pt='18px'>
              <Facebook />
              <Twitter />
              <Instagram />
              <Linkedin />
            </HStack>
          </Box>
          <Box>
            <Text fontWeight='700' fontSize='18px' color='white'>
              Company
            </Text>
            <Stack textAlign='left' pt='24px'>
              <Text fontWeight='500' fontSize='15px' color='#8890A4'>
                About Company
              </Text>
              <Text fontWeight='500' fontSize='15px' color='#8890A4'>
                Company Services
              </Text>
              <Text fontWeight='500' fontSize='15px' color='#8890A4'>
                Job Oportunities
              </Text>
              <Text fontWeight='500' fontSize='15px' color='#8890A4'>
                Creative People
              </Text>
            </Stack>
          </Box>
          <Box>
            <Text fontWeight='700' fontSize='18px' color='white'>
              Customer
            </Text>
            <Stack textAlign='left' pt='24px'>
              <Text fontWeight='500' fontSize='15px' color='#8890A4'>
                Client Support
              </Text>
              <Text fontWeight='500' fontSize='15px' color='#8890A4'>
                Latest News
              </Text>
              <Text fontWeight='500' fontSize='15px' color='#8890A4'>
                Customer Story
              </Text>
              <Text fontWeight='500' fontSize='15px' color='#8890A4'>
                Pricing Package
              </Text>
            </Stack>
          </Box>
          <Box>
            <Text fontWeight='700' fontSize='18px' color='white'>
              Additional
            </Text>
            <Stack textAlign='left' pt='24px'>
              <Text fontWeight='500' fontSize='15px' color='#8890A4'>
                Background Story
              </Text>
              <Text fontWeight='500' fontSize='15px' color='#8890A4'>
                Who Are We
              </Text>
              <Text fontWeight='500' fontSize='15px' color='#8890A4'>
                Process
              </Text>
              <Text fontWeight='500' fontSize='15px' color='#8890A4'>
                Contact Center
              </Text>
            </Stack>
          </Box>
        </Flex>
      </Container>
      <Box py='18px' color='#8890A4'>
        <hr id='footer-line' />
      </Box>
      <Container maxWidth='container.lg'>
        <Flex justify='space-between' color='#8890A4'>
          <HStack spacing={5}>
            <Text>Privacy Policy</Text>
            <Text>Legal Notice</Text>
            <Text>Term of Service</Text>
          </HStack>
          <Text>© Copyright 2023 - TailGrids</Text>
        </Flex>
      </Container>
    </Box>
  );
}
