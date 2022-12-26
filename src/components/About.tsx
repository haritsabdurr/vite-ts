import React from 'react';
import { Box, Container, Button, Text, Flex } from '@chakra-ui/react';
import { AboutIcon } from '../assets/icons';

export function About() {
  return (
    <Box>
      <Box color='#F7FAFC' bg='#6B46C1' pt='90px' px='32px' textAlign='center'>
        {' '}
        <Container maxW='container.lg'>
          <Text fontWeight='800' fontSize='48px'>
            About Us
          </Text>
          <Text fontWeight='500' fontSize='24px' pt='16px'>
            Short story why we are the best
          </Text>
        </Container>
      </Box>
      <Container maxWidth='container.lg'>
        <Flex p='12px' pt='36px' gap='96px'>
          <Box>
            <Text fontSize='18px' color='#F7FAFC' textAlign='center'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              asperiores sapiente? Iusto harum vero sequi sit commodi autem
              laborum nemo. Dolorem ab explicabo commodi, eveniet asperiores
              quae nostrum dolore perspiciatis architecto minima corrupti
              impedit repellat? Voluptatum, iusto iste! Sapiente, inside out.
            </Text>
            {/* <Button bg='#F0EAFB' color='#6B46C1' size='lg' mt='24px' m='auto'>
              Learn More
            </Button> */}
          </Box>
          {/* <Box mt='12px'>
            <AboutIcon />
          </Box> */}
        </Flex>
      </Container>
    </Box>
  );
}
