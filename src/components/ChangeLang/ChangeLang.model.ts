export enum LanguagesEnum {
  EN = 'en',
  UA = 'ua',
}

export type UseChangeLangReturnType = {
  onChangeLang: () => void;
  currentLanguage: LanguagesEnum;
};
