import Link from 'next/link';
import { Text } from '@chakra-ui/react';

export const Logo = (): JSX.Element => {
  return (
    <Link href="/">
      <Text color="red.300" fontWeight="bold" fontSize="2xl">
        Okane
      </Text>
    </Link>
  );
};
