import { Container, Box, Flex } from '@chakra-ui/react';
import { Logo1, Logo2, Logo3, Logo4 } from '../assets/logo';
export function Client() {
  return (
    <Box bg='#F4F7FF'>
      <Container py='80px' maxWidth='container.lg' centerContent>
        <Flex gap='56px'>
          <Box>
            <Logo1 />
          </Box>
          <Box>
            <Logo2 />
          </Box>
          <Box>
            <Logo3 />
          </Box>
          <Box>
            <Logo4 />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
