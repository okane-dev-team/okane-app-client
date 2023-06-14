import NextLink from 'next/link';
import { HStack } from '@chakra-ui/react';
import { NavLink } from '../Link/Link.component';

export const Nav = () => {
  return (
    <HStack>
      <NavLink as={NextLink} href="/">
        Home
      </NavLink>
      <NavLink href="/about">About</NavLink>
    </HStack>
  );
};
