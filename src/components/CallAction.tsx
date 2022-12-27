import React from 'react';
import { Container, Box, Text, Button } from '@chakra-ui/react';

export function CallAction() {
  return (
    <Box bg='#3056D3' py='90px'>
      <Container color='white' centerContent>
        <Text fontWeight='700' fontSize='38'>
          What Are You Waiting For?
        </Text>
        <Text fontWeight='400' fontSize='40'>
          Get Started Now
        </Text>
        <Text textAlign='center' fontSize='16px' mt='24px'>
          There are many variations of passages of Lorem Ipsum but the majority
          have suffered in some form.
        </Text>
        <Button bg='#13C296' fontSize='16px' fontWeight='500' mt='24px'>
          Explore Now
        </Button>
      </Container>
    </Box>
  );
}
