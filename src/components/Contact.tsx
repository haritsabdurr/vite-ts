import { Container, Box, Flex, Text, VStack } from '@chakra-ui/react';
import { MailIcon, MapIcon } from '../assets/icons';

export function Contact() {
  return (
    <Container maxWidth='container.lg' mt='-330px' pb='70px'>
      <Flex justify='space-between'>
        <Box pt='136px'>
          <Box textAlign='left' pr='96px'>
            <Text fontWeight='600' fontSize='15'>
              Contact Us
            </Text>
            <Text fontWeight='600' fontSize='35'>
              Let’s talk about <br /> Love to hear from you.
            </Text>
          </Box>
          <Flex>
            <Flex gap='12px'>
              <MapIcon />
              <Box>
                <Text fontWeight='600' fontSize='18px'>
                  Our Location
                </Text>
                <Text fontWeight='400' fontSize='16px' color='#637381' mt='6px'>
                  401 Broadway, 24th Floor, Orchard Cloud View, London
                </Text>
              </Box>
            </Flex>
            <Flex gap='12px'>
              <MailIcon />
              <Box>
                <Text fontWeight='600' fontSize='18px'>
                  How Can We Help?
                </Text>
                <Text fontWeight='400' fontSize='16px' color='#637381' mt='6px'>
                  info@yourdomain.com <br /> contact@yourdomain.com
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Box>
        <Box>
          <VStack bg='white' w='420px' h='580px' shadow='xl'>
            <Text>Test</Text>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
}
