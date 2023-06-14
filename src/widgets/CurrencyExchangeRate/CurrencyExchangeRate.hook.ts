import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { convertEchangeRateObject, sortByGivenOrder } from './';

export const currencyOrder = ['USD', 'EUR', 'DKK'];

export const useCurrencyExchageRate = () => {
  const getNbuExchangeRate = () => {
    const response = axios.get('EXCHANGE_RATE_NBU_API');

    return response;
  };

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['nbu-exchange-rate'],
    queryFn: getNbuExchangeRate,
  });

  const currencyExchangeData = sortByGivenOrder(currencyOrder, convertEchangeRateObject(data?.data));

  return { isLoading, isError, currencyExchangeData, error };
};
