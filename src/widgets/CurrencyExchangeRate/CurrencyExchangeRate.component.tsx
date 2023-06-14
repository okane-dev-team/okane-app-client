import { HStack, Stack, Text } from '@chakra-ui/react';
import { CurrencyExchangeType, useCurrencyExchageRate } from './';
import { Loader } from '@/components';
import { CurrencyEnum } from '@/dummyData/wallets.data';
import { ReactElement } from 'react';

export type CurrencyExchangeRateProps = {
  cc: string;
  rate: number;
};

export const CurrencyExchangeRate = (props: CurrencyExchangeRateProps) => {
  const { cc, rate } = props;

  return (
    <HStack p={4} boxShadow='0px 0px 1px 0px #999' key={cc}>
      <Text fontWeight='bold'>{cc}</Text>
      <Text>{rate}</Text>
    </HStack>
  );
};

export const CurrencyExchangeRateList = () => {
  const { isLoading, isError, currencyExchangeData, error } =
    useCurrencyExchageRate();

    console.log({isLoading, isError, currencyExchangeData, error})

  if (isLoading) {
    return <Loader />;
  }

  console.log({ currencyExchangeData });

  const renderEchangeRateList = (
    currency: CurrencyExchangeType,
  ): ReactElement => (
    <CurrencyExchangeRate cc={currency.cc} rate={currency.rate} />
  );

  return <Stack>{currencyExchangeData.map(renderEchangeRateList)}</Stack>;
};
