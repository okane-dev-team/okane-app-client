export enum CurrencyEnum {
  UAH = "UAH",
  USD = "USD",
}

export type WalletDataType = {
  id: number;
  name: string;
  ballance: number;
  currency: CurrencyEnum;
};

export const walletsData: WalletDataType[] = [
  {
    id: 0,
    name: "Monobank Card White",
    ballance: 1200,
    currency: CurrencyEnum.UAH,
  },
  {
    id: 1,
    name: "Monobank Card Black",
    ballance: -12000,
    currency: CurrencyEnum.UAH,
  },
  {
    id: 2,
    name: "Monobank Card USD",
    ballance: 1000,
    currency: CurrencyEnum.USD,
  },
  {
    id: 3,
    name: "A Bank Card Yellow",
    ballance: 33502,
    currency: CurrencyEnum.UAH,
  },
  {
    id: 4,
    name: "Wallet",
    ballance: 50,
    currency: CurrencyEnum.UAH,
  },
];
