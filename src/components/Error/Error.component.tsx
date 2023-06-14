import { ReactElement } from 'react';
import { AxiosError } from 'axios';
import { HStack, Text } from '@chakra-ui/react';

export type ErrorPropsType = {
  error: AxiosError | any;
};

export const Error = ({ error }: ErrorPropsType): ReactElement => {
  const errorMessage = error?.message;

  return (
    <HStack p={4} justifyContent="center">
      <Text color="red.500">{errorMessage}</Text>
    </HStack>
  );
};
