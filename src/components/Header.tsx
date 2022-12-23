import React from 'react';
import { Box, Text, Container } from '@chakra-ui/react';

export function Header() {
  return (
    <Box as='section' pb='112px'>
      <Box
        color='#F7FAFC'
        bg='#6B46C1'
        pt='90px'
        pb='198px'
        px='32px'
        textAlign='center'
      >
        {' '}
        <Container maxW='container.lg'>
          <Text fontWeight='800' fontSize='48px'>
            Simple pricing for your business
          </Text>
          <Text fontWeight='500' fontSize='24px' pt='16px'>
            Plans that are carefully crafted to suit your business.
          </Text>
        </Container>
      </Box>
    </Box>
  );
}
