import React, { ElementType } from 'react';
import { Container, HStack, Icon, StackProps, Text } from '@chakra-ui/react';
import { MoneyBack, SetupFees, PayOnce } from '../assets/icons';

interface FeatureProps extends StackProps {
  icon: ElementType;
}

function Features(props: FeatureProps) {
  const { icon, children, ...rest } = props;
  return (
    <HStack {...rest} spacing='24px'>
      <Icon as={icon} boxSize='48px' />
      <Text fontSize='18px' fontWeight='700'>
        {children}
      </Text>
    </HStack>
  );
}

export function NewFeatures() {
  return (
    <Container maxWidth='container.lg' pt='70px' pb='32px' centerContent>
      <HStack px='12px'>
        <Features icon={MoneyBack}>30 days money back guarantee</Features>
        <Features icon={SetupFees}>No setup fees 100% hassle-free</Features>
        <Features icon={PayOnce}>
          No monthly subscription. Pay once and for all
        </Features>
      </HStack>
    </Container>
  );
}
