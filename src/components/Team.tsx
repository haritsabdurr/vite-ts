import React, { ElementType } from 'react';
import {
  Container,
  Box,
  Text,
  Icon,
  StackProps,
  VStack,
  Flex,
} from '@chakra-ui/react';
import { Person1, Person2, Person3, Person4 } from '../assets/team';

interface FeatureProps extends StackProps {
  icons: ElementType;
}

function PersonCard(props: FeatureProps) {
  const { icons, children, ...rest } = props;
  return (
    <VStack {...rest}>
      <Icon as={icons} boxSize='48px' />
      <VStack>
        <Text fontWeight='500' pt='12px'>
          {children}
        </Text>
        <Text fontWeight='400' fontSize='12px' mt='0px'>
          Lorem Ipsum
        </Text>
      </VStack>
    </VStack>
  );
}

export function Team() {
  return (
    <Container
      maxWidth='container.lg'
      pt='50px'
      pb='100px'
      px='12px'
      centerContent
    >
      <Box px='176px' textAlign='center'>
        <Text fontSize='20px' fontWeight='600' color='#3056D3'>
          Our Team
        </Text>
        <Text fontSize='36px' fontWeight='700'>
          Meet the Expert
        </Text>
        <Text fontSize='16px' fontWeight='400' mt='12px'>
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form.
        </Text>
      </Box>
      <Flex gap='72px' mt='48px'>
        <PersonCard icons={Person1}>Adveen Desuza</PersonCard>
        <PersonCard icons={Person2}>Jezmin uniya</PersonCard>
        <PersonCard icons={Person3}>Andrieo Gloree</PersonCard>
        <PersonCard icons={Person4}>Jackie Sanders</PersonCard>
      </Flex>
    </Container>
  );
}
