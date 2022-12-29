import {
  Container,
  Box,
  Flex,
  Text,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';
import { MailIcon, MapIcon } from '../assets/icons';

export function Contact() {
  return (
    <Container maxWidth='container.lg' mt='-330px' pb='90px'>
      <Flex justify='space-between' gap='36px'>
        <Box pt='136px'>
          <Box textAlign='left' pr='96px'>
            <Text fontWeight='600' fontSize='15'>
              Contact Us
            </Text>
            <Text fontWeight='600' fontSize='35'>
              Let’s talk about <br /> Love to hear from you.
            </Text>
          </Box>
          <Flex gap='12px' pt='136px'>
            <Flex gap='12px'>
              <Box>
                <MapIcon />
              </Box>
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
          <VStack bg='white' w='420px' h='580px' shadow='xl' p='48px'>
            <Box textAlign='left'>
              <Text mb='18px' fontWeight='600' fontSize='28' textAlign='left'>
                Send Us a Message
              </Text>
              <form>
                <FormControl>
                  <FormLabel>Full Name</FormLabel>
                  <Input type='text' placeholder='Name Here' />
                </FormControl>
                <FormControl mt={6}>
                  <FormLabel>Email</FormLabel>
                  <Input type='email' placeholder='test@mail.com' />
                </FormControl>
                <FormControl mt={6}>
                  <FormLabel>Phone</FormLabel>
                  <Input type='text' placeholder='+885 1254 5211 552' />
                </FormControl>
                <FormControl mt={6}>
                  <FormLabel>Message</FormLabel>
                  <Input type='text' placeholder='Write Message Here' />
                </FormControl>
                <Button
                  width='120px'
                  bg='#3056D3'
                  color='white'
                  mt={4}
                  type='submit'
                >
                  Send
                </Button>
              </form>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
}
