import { Box } from '@chakra-ui/react';

export const generateDummyListComponent = (
  Component: React.ReactNode,
  number = 3
) => {
  return [...Array(number)].map((item, index) => (
    <Box key={index}>{Component}</Box>
  ));
};
