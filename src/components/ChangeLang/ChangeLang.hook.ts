import { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { LanguagesEnum, UseChangeLangReturnType } from './';

export const useChangeLang = (): UseChangeLangReturnType => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(LanguagesEnum.EN);

  const onChangeLang = () => {
    setLang((prevLang: LanguagesEnum) =>
      prevLang === LanguagesEnum.EN ? LanguagesEnum.UA : LanguagesEnum.EN,
    );
    i18n.changeLanguage(lang);
  };

  return { onChangeLang, currentLanguage: lang };
};
