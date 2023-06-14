'use client';

import { Text, VStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation();

  console.log(t('hello'));
  
  return (
    <VStack>
      <Text>About Page</Text>;<Text>{t('hello')}</Text>
    </VStack>
  );
};

export default AboutPage;
