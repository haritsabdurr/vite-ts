import React, { ElementType } from 'react';
import {
  Container,
  VStack,
  Icon,
  StackProps,
  Text,
  Flex,
} from '@chakra-ui/react';
import { NumberThree } from '../assets/features';
import { Person1 } from '../assets/team';

interface FeatureProps extends StackProps {
  icon: ElementType;
}

function Features(props: FeatureProps) {
  const { icon, children, ...rest } = props;
  return (
    <Flex {...rest} gap='18px' justify='center'>
      <Icon as={icon} boxSize='48px' />
      <VStack>
        <Text fontSize='21px' fontWeight='600' color='#212B36'>
          {children}
        </Text>
        <Text fontSize='16px' fontWeight='400' color='#637381'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt optio
          autem dolorem.
        </Text>
      </VStack>
    </Flex>
  );
}

export function NewFeatures() {
  return (
    <Container
      maxWidth='container.lg'
      pt='80px'
      pb='50px'
      px='12px'
      centerContent
    >
      <Text fontSize='20px' fontWeight='600' color='#3056D3'>
        Crafted with TailGrids Components
      </Text>
      <Text fontSize='36px' fontWeight='700'>
        200+ Tailwind CSS UI Components & Counting
      </Text>
      <Flex gap='32px' px='12px' pt='48px'>
        <Features icon={NumberThree}>
          Beautifully handcrafted components
        </Features>
        <Features icon={NumberThree}>Pixel perfect design and code</Features>
        <Features icon={NumberThree}>Fully responsive design</Features>
      </Flex>
    </Container>
  );
}
