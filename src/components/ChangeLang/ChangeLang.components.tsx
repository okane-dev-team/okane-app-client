import { ReactElement } from 'react';
import { useChangeLang } from './ChangeLang.hook';
import { Button } from '@chakra-ui/react';

export const ChangeLang = (): ReactElement => {
  const { onChangeLang, currentLanguage } = useChangeLang();

  return (
    <Button onClick={onChangeLang}>
      <span className={`fi fi-${currentLanguage === "en" ? "gb" : "ua" }`} />
    </Button>
  );
};
