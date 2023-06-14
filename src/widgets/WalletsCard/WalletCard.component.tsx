import { walletsData } from "@/dummyData/wallets.data";
import {
  Card,
  CardBody,
  CardHeader,
  HStack,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

export const WalletCard = () => {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">Wallets</Heading>
      </CardHeader>
      <CardBody>
        <Stack>
          {walletsData.map((wallet) => (
            <HStack key={wallet.id} justifyContent="space-between">
              <Text fontWeight="semibold">{wallet.name}</Text>
              <HStack>
                <Text>{wallet.ballance}</Text>
                <Text>{wallet.currency}</Text>
              </HStack>
            </HStack>
          ))}
        </Stack>
      </CardBody>
    </Card>
  );
};
