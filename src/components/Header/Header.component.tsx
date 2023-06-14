import { ChangeLang, Logo, Nav } from '@/components';
import { HStack } from '@chakra-ui/react';

export const Header = (): JSX.Element => {
  return (
    <HStack p={4} justifyContent="space-between">
      <Logo />
      <Nav />
      <ChangeLang />
    </HStack>
  );
};
