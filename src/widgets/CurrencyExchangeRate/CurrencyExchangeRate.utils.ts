import { CurrencyExchangeType } from './CurrencyExchangeRate.model';

export const convertEchangeRateObject = (data: CurrencyExchangeType[]) => {
  return data?.filter((currency) =>
    ['USD', 'EUR', 'DKK'].includes(currency.cc),
  );
};

export const sortByGivenOrder = (currencyOrder: string[], data: CurrencyExchangeType[]) => {
  data?.sort((a, b) => {
    const indexA = currencyOrder.indexOf(a.cc);
    const indexB = currencyOrder.indexOf(b.cc);

    return indexA - indexB;
  });

  return data;
};
