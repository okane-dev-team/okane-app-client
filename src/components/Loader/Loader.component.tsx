import { HStack, Spinner } from '@chakra-ui/react';
import { ReactElement } from 'react';

export const Loader = (): ReactElement => {
  return (
    <HStack justifyContent='center' p={4}>
      <Spinner />
    </HStack>
  );
};
