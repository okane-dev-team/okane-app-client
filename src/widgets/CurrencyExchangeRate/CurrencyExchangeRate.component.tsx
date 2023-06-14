import { ReactElement } from 'react';
import { Error, Loader } from '@/components';
import { CurrencyExchangeType, useCurrencyExchageRate } from './';
import { HStack, Stack, Text } from '@chakra-ui/react';

export type CurrencyExchangeRateProps = {
  cc: string;
  rate: number;
};

export const CurrencyExchangeRate = (props: CurrencyExchangeRateProps) => {
  const { cc, rate } = props;

  return (
    <HStack p={4} boxShadow="0px 0px 1px 0px #999">
      <Text fontWeight="bold">{cc}</Text>
      <Text>{rate}</Text>
    </HStack>
  );
};

export const CurrencyExchangeRateList = () => {
  const { isLoading, isError, currencyExchangeData, error } =
    useCurrencyExchageRate();

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error error={error} />;
  }

  const renderEchangeRateList = (
    currency: CurrencyExchangeType
  ): ReactElement => (
    <CurrencyExchangeRate
      key={currency.cc}
      cc={currency.cc}
      rate={currency.rate}
    />
  );

  return <Stack>{currencyExchangeData.map(renderEchangeRateList)}</Stack>;
};
